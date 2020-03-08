/**
 * 组件：switch
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
    checked: {
      type: Boolean,
      value: false
    },
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      value: "normal"
    },
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null,
      value: true
    },
    inactiveValue: {
      type: null,
      value: false
    }
  },

  data: {
    _switchStyle: "",
    _checked: false,
    _size: ""
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { checked } = this.properties
  /**
   * _class 和 _style 是组件内部维护的，
   * 保存类名和样式的 data
   */
  this.setData({
    _checked: checked
  })
  this.onCheckedChange()
}

options = mixinComponent(options, dataHook(["checked"], onPropsChange))

const onCheckedChange = function() {
  const _checked = this.data._checked
  const { activeColor, inactiveColor, size, disabled } = this.properties
  this.setData({
    _switchStyle:
      (_checked
        ? `background-color: ${activeColor || "var(--primary-color, #4379ff)"};`
        : `background-color: ${inactiveColor || "var(--bg-color, #fff)"};`) +
      (disabled
        ? "opacity: 0.5;background-color: var(--disabled-color, #c6c6c6);"
        : ""),
    _size:
      (size === "large" && "joy-switch-size-large") ||
      (size === "small" && "joy-switch-size-small") ||
      ""
  })
}
/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange,
    onCheckedChange,
    onSwitchTap() {
      this.setData({
        _checked: !this.data._checked
      })
      const val = this.data._checked
        ? this.properties.activeValue
        : this.properties.inactiveValue
      this.triggerEvent("change", val)
      this.onCheckedChange()
    }
  },

  attached() {
    // 在组件加载时执行样式的初始化
    this.onPropsChange()
  }
})

console.log(options)

Component(options)
