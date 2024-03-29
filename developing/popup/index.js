/**
 * 组件：popup
 * 版本：v0.0.4
 * 维护人：SU
 */
const janComponent = require("../_common/jan-component")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    show: {
      type: Boolean,
      value: false
    },

    zIndex: {
      type: Number,
      value: 100
    },

    duration: {
      type: Number,
      value: 400
    },

    position: {
      type: String,
      value: "center"
    },

    model: {
      type: Boolean,
      value: false
    },

    hasPadding: {
      type: Boolean,
      value: true
    },

    opacity: {
      type: Number,
      value: 1
    },

    customStyle: String
  },

  methods: {
    onOverlayTap() {
      if (!this.properties.model) {
        this.triggerEvent("close")
      }
    }
  }
})

Component(options)
