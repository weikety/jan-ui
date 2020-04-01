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
    title: String
  }
})

const onPropsChange = function() {
  const { title } = this.properties
  /**
   * _class 和 _style 是组件内部维护的，
   * 保存类名和样式的 data
   */
  this.setData({
    _class: `新的类名`
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(options, dataHook(["title"], onPropsChange))

Component(options)
