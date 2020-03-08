/**
 * 组件：checkbox
 * 版本：v0.0.2
 * 维护人：Meeken
 */
const joyComponent = require("../_common/joy-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 joyComponent 初始化组件配置 */

let options = joyComponent({
  properties: {
    name: String,
    shape: String,
    value: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    labelDisabled: {
      type: Boolean,
      value: false
    },
    iconSize: String,
    checkedColor: String
  },

  data: {
    _value: false,
    _disabled: false,
    _nodeStyle: "",
    _shape: ""
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { value } = this.properties
  this.setData({
    _value: value
  })
  this.onValueChange()
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(
  options,
  dataHook(["value", "disabled"], onPropsChange)
)

/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange,
    onValueChange() {
      const value = this.data._value
      const { disabled, checkedColor, shape } = this.properties
      this.setData({
        _class: value ? "check" : "",
        _style:
          (value ? `border-color: #4379ff;` : "") +
          (disabled || this.data._disabled
            ? "opacity: 0.5;background-color: var(--disabled-color, #c6c6c6);"
            : ""),

        _nodeStyle: checkedColor
          ? "background-color: " + checkedColor + ";"
          : "",
        _shape: shape == "circle" ? "border-radius: 50%;" : ""
      })
    },

    onTap() {
      this.setData({
        _value: !this.data._value
      })
      this.onValueChange()
      this.triggerEvent("change", this.data._value)
    },

    setDisabled() {
      this.setData({
        _disabled: true
      })
      this.onValueChange()
    }
  },

  attached() {
    // 在组件加载时执行样式的初始化
    this.onPropsChange()
  }
})

Component(options)
