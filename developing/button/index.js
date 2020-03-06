/**
 * 组件：button
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const joyComponent = require("../_common/joy-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

const openType = require("../_common/open-type")

let options = joyComponent({
  properties: {
    type: {
      type: String,
      value: "black"
    },
    size: {
      type: String,
      value: "normal"
    },
    color: {
      type: String,
      value: ""
    },
    round: {
      type: Boolean,
      value: false
    },
    line: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onTap(e) {
      this.triggerEvent("click", e)
    }
  }
})

options = mixinComponent(options, openType())

const onClassChange = function() {
  const { type, size, round, line, customClass } = this.properties
  this.setData({
    _class: `joy-button-type-${type} joy-button-size-${size} ${customClass} ${
      round ? "joy-button-round" : ""
    } ${line ? "joy-button-line" : ""}`
  })
}

const onStyleChange = function() {
  const { color, line } = this.properties
  if (!color) return
  this.setData({
    _style: line
      ? `border: 2rpx solid ${color};color: ${color};`
      : `background: ${color}`
  })
}

/* 当这些属性改变时，动态设置 class */
options = mixinComponent(options, dataHook(["type", "size"], onClassChange))
/* 当这些属性改变时，动态设置 style */
options = mixinComponent(
  options,
  dataHook(["color", "customClass"], onStyleChange)
)

/* 在组件生命周期中初始化样式 */
options = mixinComponent(options, {
  methods: {
    onClassChange,
    onStyleChange
  },

  attached() {
    this.onClassChange()
    this.onStyleChange()
  }
})

Component(options)
