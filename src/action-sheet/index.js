/**
 * 组件：action-sheet
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")
const openType = require("../_common/open-type")

const { isIphoneX } = require("../_common/is-iphonex")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    action: {
      type: Array,
      value: []
    },
    show: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: Number,
      value: 200
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    },
    cancelType: {
      type: String,
      value: "info"
    },
    showCancel: Boolean,
    closeOnActionClick: Boolean,
    closeOnOverlayClick: Boolean,
    showOverlay: {
      type: Boolean,
      value: true
    }
  },

  data: {
    _show: false,
    isX: isIphoneX()
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
    },

    onTap(e) {
      const info = e.currentTarget.dataset.info
      this.triggerEvent("click", info)
      if (this.properties.closeOnActionClick) {
        this.setData({
          _show: false
        })
        this.triggerEvent("close")
      }
    },

    onOverlayTap() {
      this.triggerEvent("click-overlay")
    }
  },

  attached() {
    // 在组件加载时执行样式的初始化
    this.onPropsChange()
  }
})

options = mixinComponent(options, openType())

Component(options)
