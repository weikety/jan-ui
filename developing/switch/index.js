/**
 * 组件：switch
 * 版本：v0.0.3
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
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
    _size: "",
    _disabled: false
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
  this.onValueChange()
}

options = mixinComponent(options, dataHook(["checked"], onPropsChange))

const onValueChange = function() {
  const _checked = this.data._checked
  const { activeColor, inactiveColor, size, disabled } = this.properties
  this.setData({
    _switchStyle:
      (_checked
        ? `background-color: ${activeColor || "var(--primary-color, #4379ff)"};`
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
        _checked: !this.data._checked
      })
      const val = this.data._checked
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
