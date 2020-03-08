/**
 * 组件：row
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const joyComponent = require("../_common/joy-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 joyComponent 初始化组件配置 */

let options = joyComponent({
  properties: {
    customClass: String,
    gutter: {
      type: String,
      value: ""
    }
  },

  relations: {
    "../col/index": {
      type: "child",
      linked(target) {
        console.log(target)
      }
    }
  },

  data: {
    _gutter: ""
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { gutter } = this.properties
  this.setData({
    _gutter: gutter
  })
  if (gutter) {
    this.setGutter()
  }
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(options, dataHook(["gutter"], onPropsChange))

/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange,
    setGutter() {
      const { _gutter } = this.data
      this.getRelationNodes("../col/index").forEach((col, index) => {
        if (index > 0) col.setGutter(_gutter)
      })
    }
  },

  attached() {
    this.onPropsChange()
  }
})

Component(options)
