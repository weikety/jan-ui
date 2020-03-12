/**
 * 组件：search
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    focus: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    inputAlign: {
      type: String,
      value: "left"
    },
    showAction: Boolean,
    useActionSlot: Boolean,
    useLeftIconSlot: Boolean,
    useRightIconSlot: Boolean,
    value: String,
    leftIcon: {
      type: String,
      value: "search"
    },
    rightIcon: String,
    placeholder: String,
    confirmType: String,
    confirmHold: Boolean,
    holdKeyboard: Boolean,
    errorMessage: String,
    placeholderStyle: {
      type: String,
      value: "color: var(--font-color-light, #c6c6c6);opacity: 0.8;"
    },
    errorMessageStyle: {
      type: String,
      value: "text-align: left;color: red;"
    },
    inputAlign: {
      type: String,
      value: "left"
    },
    selectionEnd: {
      type: Number,
      value: -1
    },
    selectionStart: {
      type: Number,
      value: -1
    },
    showConfirmBar: {
      type: Boolean,
      value: true
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    cursorSpacing: {
      type: Number,
      value: 50
    },
    maxlength: {
      type: Number,
      value: -1
    },
    type: {
      type: String,
      value: "text"
    },
    actionText: {
      type: String,
      value: "取消"
    },
    wrapperBackground: {
      type: String,
      value: "var(--wrapper-color, #fff)"
    },
    background: {
      type: String,
      value: "var(--bg-color, #fff)"
    },
    maxlength: {
      type: Number,
      value: -1
    },
    shape: {
      type: String,
      value: "square"
    },
    clearable: {
      type: Boolean,
      value: true
    }
  },

  data: {
    _value: "",
    _background: "",
    _wrapperBackground: "",
    _inputAlign: ""
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const {
    value,
    background,
    shape,
    inputAlign,
    wrapperBackground
  } = this.properties
  this.setData({
    _value: value || "",
    _background: `background: ${background};`,
    _wrapperBackground: `background: ${wrapperBackground};`,
    _shape: shape === "round" ? "border-radius: 33rpx;" : "",
    _inputAlign: `text-align: ${inputAlign};`
  })
}

options = mixinComponent(
  options,
  dataHook(
    ["value", "background", "shape", "inputAlign", "wrapperBackground"],
    onPropsChange
  )
)

/* 初始化样式，将 onStyleChange 和 onPropsChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange,

    onInput(event) {
      const { value = "" } = event.detail || {}
      this.setData({ _value: value })
      wx.nextTick(() => {
        this.emitChange(value)
      })
    },
    onFocus(event) {
      this.setData({ _focused: true })
      this.triggerEvent("focus", event.detail)
    },
    onBlur(event) {
      this.setData({ _focused: false })
      this.triggerEvent("blur", event.detail)
    },
    onClear() {
      this.setData({ _value: "" })
      wx.nextTick(() => {
        this.emitChange("")
        this.triggerEvent("clear", "")
      })
    },
    onConfirm() {
      this.triggerEvent("search", this.data._value)
    },
    onKeyboardheightchange(event) {
      this.triggerEvent("keyboardheightchange", event.detail)
    },
    emitChange(value) {
      this.triggerEvent("input", value)
      this.triggerEvent("change", value)
    },
    onActionTap() {
      this.triggerEvent("action", this.data._value)
    },
    noop() {}
  },

  attached() {
    // 在组件加载时执行样式的初始化
    this.onPropsChange()
  }
})

/* 混入其他配置项 */

// options = mixinComponent(options, {
//   /* 要混入的配置项 */
// })

Component(options)
