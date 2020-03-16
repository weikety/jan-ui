/**
 * 组件：tabbar-item
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    name: String,
    icon: String,
    dot: String,
    info: String,
    size: {
      type: String,
      value: "40rpx"
    }
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  //   const { name, dot, info } = this.properties
  //   this.setData({
  //     _style: `新的样式`
  //   })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(options, dataHook(["name"], onPropsChange))

/* 初始化样式，将 onPropsChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange
  },

  attached() {
    this.onPropsChange()
  }
})

Component(options)
