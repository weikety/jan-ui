/**
 * 组件：stepper
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    value: {
      type: null,
      value: 0,
      observer: "check"
    },
    integer: {
      type: Boolean,
      observer: "check"
    },
    disabled: Boolean,
    inputWidth: null,
    buttonSize: null,
    asyncChange: Boolean,
    disableInput: Boolean,
    decimalLength: {
      type: Number,
      value: null,
      observer: "check"
    },
    min: {
      type: null,
      value: 1,
      observer: "check"
    },
    max: {
      type: null,
      value: Number.MAX_SAFE_INTEGER,
      observer: "check"
    },
    step: {
      type: null,
      value: 1
    },
    showPlus: {
      type: Boolean,
      value: true
    },
    showMinus: {
      type: Boolean,
      value: true
    },
    disablePlus: Boolean,
    disableMinus: Boolean,
    longPress: {
      type: Boolean,
      value: true
    }
  },

  data: {
    _value: 0,
    _disabled: false,
    _timeoutCb: 0,
    _propsValue: 0
  }
})

const onPropsChange = function() {
  const { disabled, value, max, min } = this.properties
  this.setData({
    _disabled: disabled,
    _propsValue: this.check(
      (value * 1 >= max * 1 && max) ||
        (value * 1 <= min * 1 && min) ||
        value ||
        min ||
        0
    )
  })
}

options = mixinComponent(
  options,
  dataHook(["disabled", "value"], onPropsChange)
)

options = mixinComponent(options, {
  methods: {
    onPropsChange,
    check(val) {
      let { max, min, integer, value } = this.properties
      if (typeof val === "string" || typeof val === "number") value = val
      if (integer) value = parseInt(value)
      if (value >= max) {
        value = max * 1
      } else if (value <= min) {
        value = min * 1
      }
      value = value || min || 0
      if (this.properties.decimalLength) {
        value = value.toFixed(this.properties.decimalLength)
      }
      this.setData({
        _value: value
      })

      return value
    },

    onIncrease() {
      let _value = this.data._value || this.properties.min || 0
      let { max, min, step, asyncChange } = this.properties
      _value = _value * 1 + step * 1
      if (_value >= max) {
        _value = max * 1
      } else if (_value <= min) {
        _value = min * 1
      }
      this.triggerEvent("plus", this.check(_value))
      this.triggerEvent("change", this.check(_value))
      if (asyncChange) return
      this.check(_value)
    },

    onDecrease() {
      let _value = this.data._value || this.properties.min || 0
      let { max, min, step, asyncChange } = this.properties
      _value = _value * 1 - step * 1
      if (_value >= max) {
        _value = max * 1
      } else if (_value <= min) {
        _value = min * 1
      }
      this.triggerEvent("minus", this.check(_value))
      this.triggerEvent("change", this.check(_value))
      if (asyncChange) return
      this.check(_value)
    },

    onStartIncrease() {
      if (!this.properties.longPress) return
      let cb = setInterval(() => {
        this.onIncrease()
      }, 200)
      this.setData({
        _timeoutCb: cb
      })
    },

    onStartDecrease() {
      if (!this.properties.longPress) return
      let cb = setInterval(() => {
        this.onDecrease()
      }, 200)
      this.setData({
        _timeoutCb: cb
      })
    },

    onCancel() {
      clearInterval(this.data._timeoutCb)
    },

    onInputChange(e) {
      let { value } = e.detail
      this.triggerEvent("change", this.check(value))
    },

    onInputConfirm(e) {
      let { value } = e.detail
      let { max, min } = this.properties
      if (value >= max) {
        value = max * 1
      } else if (value <= min) {
        value = min * 1
      }
      this.triggerEvent("change", this.check(value))
    },

    onFocus() {
      this.triggerEvent("focus", null)
    },

    onBlur() {
      this.triggerEvent("blur", null)
    },

    onEnabled() {
      this.triggerEvent("enabled", null)
    }
  }
})

Component(options)
