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
    inputAlign: String,
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
    placeholderStyle: {
      type: String,
      value: "color: var(--font-color-light, #c6c6c6);opacity: 0.8;"
    },
    actionText: {
      type: String,
      value: "取消"
    },
    background: {
      type: String,
      value: "var(--wrapper-color, #fff)"
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
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { value, background, shape } = this.properties
  this.setData({
    _value: value || "",
    _background: `background: ${background};`,
    _shape: shape === "round" ? "border-radius: 33rpx" : ""
  })
}

options = mixinComponent(
  options,
  dataHook(["value", "background", "shape"], onPropsChange)
)

/* 初始化样式，将 onStyleChange 和 onPropsChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange
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
