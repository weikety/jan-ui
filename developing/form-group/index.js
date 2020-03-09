/**
 * 组件：form-group
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    data: {
      type: Array,
      value: []
    },
    type: {
      type: String,
      value: "switch"
    },
    borderRadius: {
      type: String,
      value: ""
    },
    clickable: Boolean
  }
})

/* 监听 class 和 style 变化的方法 */

const onClassChange = function() {
  const { clickable } = this.properties
  /**
   * _class 和 _style 是组件内部维护的，
   * 保存类名和样式的 data
   */
  this.setData({
    _class: `${clickable ? "jan-ripple jan-form-clickable" : ""}`
  })
}

options = mixinComponent(options, dataHook(["data", "type"], onClassChange))

/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onClassChange
  },

  attached() {
    // 在组件加载时执行样式的初始化
    this.onClassChange()
  }
})

Component(options)
