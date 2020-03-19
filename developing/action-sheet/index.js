/**
 * 组件：action-sheet
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    customClass: String,
    show: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: Number,
      value: 200
    }
  },

  data: {
    _show: false
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { show } = this.properties
  this.setData({
    _show: show
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(options, dataHook(["show"], onPropsChange))

/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange,

    onClosePopup() {
      this.triggerEvent("close", null)
    }
  },

  attached() {
    // 在组件加载时执行样式的初始化
    this.onPropsChange()
  }
})


Component(options)
