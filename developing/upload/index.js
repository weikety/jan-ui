// /**
//  * 组件：Mixin 组件模版
//  * 版本：v0.0.1
//  * 维护人：Meeken
//  */
// const janComponent = require("../_common/jan-component")
// const mixinComponent = require("../_common/mixin-component")
// const dataHook = require("../_common/data-hook")

// /* 使用 janComponent 初始化组件配置 */

// let options = janComponent({
//   properties: {
//     list: {
//       type: Array,
//       value: []
//     },
//     maxCount: {
//       type: Number,
//       value: 9
//     },
//     maxSize: {
//       type: Number,
//       value: 0
//     },
//     previewImage: {
//       type: Boolean,
//       value: true
//     },
//     useAsyncRead: {
//       type: Boolean,
//       value: true
//     },
//     disabled: Boolean,
//     deletable: {
//       type: Boolean,
//       value: true
//     },
//     previewWidth: {
//       type: String,
//       value: "80px"
//     },
//     multiple: false,
//     useSlot: Boolean,
//     imageFit: {
//       type: String,
//       value: "aspectFill"
//     }
//   }
// })

// /* 监听 class 和 style 变化的方法 */

// const onPropsChange = function() {
//   const { list } = this.properties
//   this.setData({
//     _class: `新的类名`
//   })
// }

// /* 使用 dataHook 来监听 props 或 data 的变化 */

// options = mixinComponent(options, dataHook(["list"], onPropsChange))

// /* 初始化样式，将 onStyleChange 和 onPropsChange 添加到组件的 methods */

// options = mixinComponent(options, {
//   methods: {
//     onPropsChange
//   },

//   attached() {
//     // 在组件加载时执行样式的初始化
//     this.onPropsChange()
//   }
// })

// /* 混入其他配置项 */

// // options = mixinComponent(options, {
// //   /* 要混入的配置项 */
// // })

// Component(options)
