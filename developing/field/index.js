/**
 * 组件：Mixin 组件模版
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  behaviors: ["wx://form-field"],
  properties: {
    size: String,
    icon: String,
    error: Boolean,
    fixed: Boolean,
    focus: Boolean,
    hasPadding: Boolean,
    rightIcon: String,
    useRightSlot: Boolean,
    disabled: Boolean,
    autosize: Boolean,
    readonly: Boolean,
    required: Boolean,
    password: Boolean,
    iconClass: String,
    clearable: Boolean,
    placeholder: String,
    customStyle: String,
    confirmType: String,
    confirmHold: Boolean,
    holdKeyboard: Boolean,
    errorMessage: String,
    arrowDirection: String,
    placeholderStyle: String,
    errorMessageStyle: {
      type: String,
      value: "text-align: left;color: red;"
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
    }
  },

  data: {
    _value: "",
    _focused: false
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { value } = this.properties
  /**
   * _class 和 _style 是组件内部维护的，
   * 保存类名和样式的 data
   */
  this.setData({
    _value: value
  })
}

// const onStyleChange = function() {
//   const {
//     /* 需要读取的属性 */
//   } = this.properties
//   this.setData({
//     _style: `新的样式`
//   })
// }

options = mixinComponent(options, dataHook(["value"], onPropsChange))

/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

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
    onClickIcon() {
      this.triggerEvent("click-icon")
    },
    onClear() {
      this.setData({ _value: "" })
      wx.nextTick(() => {
        this.emitChange("")
        this.triggerEvent("clear", "")
      })
    },
    onConfirm() {
      this.triggerEvent("confirm", this.data._value)
    },
    emitChange(value) {
      this.triggerEvent("input", value)
      this.triggerEvent("change", value)
    },
    noop() {}
  },

  attached() {
    this.onPropsChange()
  }
})

/* 混入其他配置项 */

// options = mixinComponent(options, {
//   /* 要混入的配置项 */
// })

Component(options)
