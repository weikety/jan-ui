/**
 * 组件：button
 * 版本：v0.0.4
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")
const { hex2Rgb, isTextDeepColor } = require("../_common/color")

const openType = require("../_common/open-type")

let options = janComponent({
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
    },
    disabled: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ""
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
  const { type, size, round, line, disabled, customClass } = this.properties
  this.setData({
    _class: `jan-button-type-${type} jan-button-size-${size} ${customClass} ${
      round ? "jan-button-round" : ""
    } ${line ? "jan-button-line" : ""} ${disabled ? "jan-button-disabled" : ""}`
  })
}

const onStyleChange = function() {
  const { color, line } = this.properties
  if (!color) return

  let colorArr = hex2Rgb(color),
    isDeepColor = isTextDeepColor(colorArr)

  this.setData({
    _style: line
      ? `border: 2rpx solid ${color};color: ${color};`
      : `background: ${color}; color: ${isDeepColor ? "#515a6e" : "#fff"};`
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
  }
})

Component(options)
