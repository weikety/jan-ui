/**
 * 组件：switch
 * 版本：v0.0.4
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")
const extraProps = require("../_common/extra-props")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    name: String,
    value: {
      type: Boolean,
      value: false
    },
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
    },
    extraProps: {
      type: Object,
      value: {}
    }
  },

  data: {
    _switchStyle: "",
    _value: false,
    _size: "",
    _disabled: false
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { value, extraProps } = this.properties
  this.setData({
    _value: value
  })

  if (typeof extraProps === "object")
    this.setData({
      _extraProps: extraProps
    })
  this.onValueChange()
}

options = mixinComponent(
  options,
  dataHook(
    ["value", "activeColor", "inactiveColor", "size", "disabled", "extraProps"],
    onPropsChange
  )
)

const onValueChange = function() {
  const _value = this.data._value
  const { activeColor, inactiveColor, size, disabled } = extraProps(
    this.properties,
    this.data._extraProps
  )
  this.setData({
    _switchStyle:
      (_value
        ? `background-color: ${activeColor || "var(--style-color, #4379ff)"};`
        : `background-color: ${inactiveColor ||
            "var(--wrapper-color, #fafafa)"};`) +
      (disabled || this.data._disabled
        ? "opacity: 0.5;background-color: var(--disabled-color, #c6c6c6);"
        : ""),
    _size:
      (size === "large" && "jan-switch-size-large") ||
      (size === "small" && "jan-switch-size-small") ||
      ""
  })
}
/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange,
    onValueChange,
    onTap() {
      if (this.properties.disabled) return
      this.setData({
        _value: !this.data._value
      })
      const val = this.data._value
        ? this.properties.activeValue
        : this.properties.inactiveValue
      this.triggerEvent("change", val)
      this.onValueChange()
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
