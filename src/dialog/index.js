/**
 * 组件：dialog
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    title: String,
    show: Boolean,
    autoClose: {
      type: Boolean,
      value: true
    },
    customStyle: String,
    showConfirm: {
      type: Boolean,
      value: true
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    confirmText: {
      type: String,
      value: "确认"
    },
    cancelText: {
      type: String,
      value: "取消"
    },
    confirmColor: String,
    cancelColor: String
  },

  data: {
    _show: false
  }
})

const onPropsChange = function() {
  const { show } = this.properties
  this.setData({
    _show: show || false
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(options, dataHook(["show"], onPropsChange))

options = mixinComponent(options, {
  methods: {
    onClose() {
      if (this.properties.autoClose) {
        this.setData({
          _show: false
        })
      }
      this.triggerEvent("close")
    },

    onCancel() {
      if (this.properties.autoClose) {
        this.setData({
          _show: false
        })
      }
      this.triggerEvent("cancel")
    },

    onConfirm() {
      this.triggerEvent("confirm")
    },

    onPropsChange
  }
})

Component(options)
