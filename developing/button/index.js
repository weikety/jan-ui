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

options = mixinComponent(options, {
  data: {
    mew: 1
  }
})

options = mixinComponent(options, openType())

console.log(options)
Component(options)
