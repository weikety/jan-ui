/**
 * 组件：refresher
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    pullingIcon: {
      type: String,
      value: ""
    },
    pullingText: {
      type: String,
      value: "下拉刷新"
    },
    refreshingIcon: {
      type: String,
      value: ""
    },
    refreshingText: {
      type: String,
      value: "正在刷新"
    },
    disablePullingRotation: {
      type: Boolean,
      value: false
    },
    distance: {
      type: Number,
      value: 30
    },
    prefixLCls: {
      type: String,
      value: "wux-loader"
    },
    isShowLoadingText: {
      type: Boolean,
      value: false
    },
    loadingText: {
      type: String,
      value: "正在加载"
    },
    loadNoDataText: {
      type: String,
      value: "没有更多数据"
    },
    scrollTop: {
      type: Number,
      value: 0,
      observer: "onScroll"
    }
  }
})

/* 监听 class 和 style 变化的方法 */

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

/* 使用 dataHook 来监听 props 或 data 的变化 */

// options = mixinComponent(
//   options,
//   dataHook(["这些属性变化，会触发 _style 刷新"], onStyleChange)
// )

// options = mixinComponent(
//   options,
//   dataHook(["这些属性变化，会触发 _class 刷新"], onClassChange)
// )

/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {},

  attached() {}
})

/* 混入其他配置项 */

// options = mixinComponent(options, {
//   /* 要混入的配置项 */
// })

Component(options)
