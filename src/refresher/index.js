/**
 * 组件：refresher
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")
const mapScrollView = require("../_common/scroll-view")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    refresherTextStyle: {
      type: String,
      value: "black"
    },
    refresherBackground: {
      type: String,
      value: "inherit"
    },
    triggered: {
      type: Boolean,
      value: false
    },
    threshold: {
      type: Number,
      value: 50
    },
    restoredText: {
      type: String,
      value: "下拉刷新"
    },
    pullingText: {
      type: String,
      value: "松开刷新"
    },
    refreshingText: {
      type: String,
      value: "正在刷新"
    },
    useSlotStyle: Boolean
  },

  data: {
    _state: "下拉刷新",
    _stateCode: 0,
    _process: 0
  }
})

options = mixinComponent(options, mapScrollView())

options = mixinComponent(options, {
  methods: {
    on2Upper(e) {
      this.$emit("scrolltoupper", e)
    },

    on2Lower(e) {
      this.$emit("scrolltolower", e)
    },

    onScroll(e) {
      this.$emit("scroll", e)
    },

    onPulling(e) {
      const dy = e.detail.dy,
        threshold = this.properties.threshold
      console.log(dy / threshold)
      this.setData({
        _process: dy / threshold,
        _stateCode: 1,
        _state:
          dy < threshold
            ? this.properties.restoredText
            : this.properties.pullingText
      })
      this.$emit("pulling", e)
    },

    onRefreshed(e) {
      this.setData({
        _state: this.properties.refreshingText,
        _stateCode: 2,
        _process: 1
      })
      this.$emit("refresh", e)
    },

    onRestored(e) {
      this.setData({
        _state: "",
        _stateCode: 0,
        _process: 0
      })
      this.$emit("restore", e)
    },

    onAbort(e) {
      this.setData({
        _state: "",
        _stateCode: 0,
        _process: 0
      })
      this.$emit("abort", e)
    }
  },

  attached() {}
})

console.log(options)

Component(options)
