/**
 * 组件：button
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const joyComponent = require("../_common/joy-component")
const mixinComponent = require("../_common/mixin-component")
const openType = require("../_common/open-type")

let options = joyComponent({
  properties: {
    type: {
      type: String,
      value: "black"
    }
  }
})

options = mixinComponent(options, openType())

/* 根据 prop 动态改变样式 */
options = mixinComponent(options, {
  data: {
    extraClass: "fuck"
  }
})

console.log(options)

Component(options)
