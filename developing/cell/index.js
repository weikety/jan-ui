/**
 * 组件：cell
 * 版本：v0.0.2
 * 维护人：Meeken
 */
const joyComponent = require("../_common/joy-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 joyComponent 初始化组件配置 */

let options = joyComponent({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    icon: String,
    title: String,
    titleWidth: String,
    titleMaxRows: Number,
    value: String,
    label: String,
    size: String,
    border: {
      type: Boolean,
      value: true
    },
    align: {
      type: String,
      value: "start"
    },
    url: String,
    linkType: {
      type: String,
      value: "navigateTo"
    },
    clickable: Boolean,
    isLink: Boolean,
    required: Boolean,
    arrowDirection: String
  },

  data: {
    _titleWidth: "",
    _titleMaxRows: "",
    _arrowDirection: ""
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
    _class: `${clickable ? "joy-ripple joy-cell-clickable" : ""}`
  })
}

const onStyleChange = function() {
  const { titleWidth, titleMaxRows, arrowDirection } = this.properties
  this.setData({
    _titleWidth: titleWidth ? `max-width: ${titleWidth};overflow: hidden;` : "",

    _titleMaxRows: titleMaxRows
      ? `overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${titleMaxRows || 3};
      -webkit-box-orient: vertical;`
      : "",

    _arrowDirection: ["up", "down", "left", "right"].includes(arrowDirection)
      ? arrowDirection
      : "right"
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(
  options,
  dataHook(["titleWidth", "titleMaxRows", "arrowDirection"], onStyleChange)
)

options = mixinComponent(options, dataHook(["clickable"], onClassChange))

/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onClassChange,
    onStyleChange,

    onTap(e) {
      this.triggerEvent("click", e)
    },

    onLinkTap() {
      const { linkType, url } = this.properties
      if (!url) return
      switch (linkType) {
        case "redirectTo":
          wx.redirectTo({
            url
          })
          break
        case "switchTab":
          wx.switchTab({
            url
          })
          break
        case "reLaunch":
          wx.reLaunch({
            url
          })
          break
        default:
          wx.navigateTo({
            url
          })
      }
    }
  },

  attached() {
    this.onClassChange()
    this.onStyleChange()
  }
})

Component(options)
