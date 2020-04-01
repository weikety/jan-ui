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
  properties: {
    title: String,
    show: Boolean,
    autoClose: {
      type: Boolean,
      value: true
    }
  },

  data: {
    _show: false
  }
})

const onPropsChange = function() {
  const { title, show } = this.properties
  this.setData({
    _show: show || false
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(options, dataHook(["title", "show"], onPropsChange))

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
    onPropsChange
  }
})

Component(options)
