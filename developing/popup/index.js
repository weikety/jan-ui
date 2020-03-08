/**
 * 组件：popup
 * 版本：v0.0.1
 * 维护人：SU
 */
const joyComponent = require("../_common/joy-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 joyComponent 初始化组件配置 */

let options = joyComponent({
  properties: {
    show: {
      type: Boolean,
      value: false
    },

    "zindex": {
      type: Number,
      value: 100
    },

    position: {
      type: String,
      value: "center"
    },

    model: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onBgTap() {
      if (!this.properties.model) {
        this.triggerEvent("close")
      }
    },

    onPanelTap(e) {
      // 什么也不干
    }
  }
})

// /* 监听 class 和 style 变化的方法 */

// const onClassChange = function() {
//   const {
//     /* 需要读取的属性 */
//   } = this.properties
//   /**
//    * _class 和 _style 是组件内部维护的，
//    * 保存类名和样式的 data
//    */
//   this.setData({
//     _class: `新的类名`
//   })
// }

// const onStyleChange = function() {
//   const {
//     /* 需要读取的属性 */
//   } = this.properties
//   this.setData({
//     _style: `新的样式`
//   })
// }

// /* 使用 dataHook 来监听 props 或 data 的变化 */

// options = mixinComponent(
//   options,
//   dataHook(["这些属性变化，会触发 _style 刷新"], onStyleChange)
// )

// options = mixinComponent(
//   options,
//   dataHook(["这些属性变化，会触发 _class 刷新"], onClassChange)
// )

// /* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

// options = mixinComponent(options, {
//   methods: {
//     onClassChange,
//     onStyleChange
//   },

//   attached() {
//     // 在组件加载时执行样式的初始化
//     this.onClassChange()
//     this.onStyleChange()
//   }
// })

Component(options)
