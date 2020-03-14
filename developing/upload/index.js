/**
 * 组件：Mixin 组件模版
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    list: {
      type: Array,
      value: []
    },
    blankTips: String,
    maxCount: {
      type: Number,
      value: 9
    },
    maxSize: {
      type: Number,
      value: 0
    },
    previewImage: {
      type: Boolean,
      value: true
    },
    useAsyncRead: {
      type: Boolean,
      value: true
    },
    disabled: Boolean,
    deletable: {
      type: Boolean,
      value: true
    },
    previewWidth: {
      type: String,
      value: "160rpx"
    },
    previewSpace: {
      type: String,
      value: "22rpx"
    },
    multiple: Boolean,
    useSlot: Boolean,
    imageFit: {
      type: String,
      value: "aspectFill"
    }
  },

  data: {
    _spacing: ""
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { list, previewWidth, previewSpace } = this.properties
  this.setData({
    _list: list,
    _spacing: previewSpace ? `margin-right: ${previewSpace};` : "",
    _size: previewWidth ? `width: ${previewWidth};height: ${previewWidth};` : ""
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(
  options,
  dataHook(["list", "previewWidth", "previewSpace"], onPropsChange)
)

/* 初始化样式，将 onStyleChange 和 onPropsChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange,

    onDelete() {
      console.log(1)
    }
  }
})

/* 混入其他配置项 */

// options = mixinComponent(options, {
//   /* 要混入的配置项 */
// })

Component(options)
