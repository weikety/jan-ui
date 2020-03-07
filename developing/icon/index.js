/**
 * 组件：icon
 * 版本：v0.0.1
 * 维护人：SU
 */
const joyComponent = require("../_common/joy-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

const openType = require("../_common/open-type")
const addUnit = require("./add-unit").addUnit

let options = joyComponent({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ""
    },
    size: {
      type: null,
      value: null
    },
    color: {
      type: String,
      value: ""
    },
    prefix: {
      type: String,
      value: "joy-icon"
    }
  },

  methods: {
    onTap(e) {
      this.triggerEvent("click", e)
    },

    addUnit
  }
})

options = mixinComponent(options, openType())

const onClassChange = function() {
  const { prefix, name } = this.properties
  this.setData({
    _class: `${prefix} ${prefix + '-' + name}`
  })
}

const onStyleChange = function() {
  const { color, size } = this.properties
  this.setData({
    _style: `color: ${color}; font-size: ${this.addUnit(size)};`
  })
}

/* 当这些属性改变时，动态设置 class */
options = mixinComponent(options, dataHook(["prefix", "name"], onClassChange))
/* 当这些属性改变时，动态设置 style */
options = mixinComponent(
  options,
  dataHook(["color", "size"], onStyleChange)
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
