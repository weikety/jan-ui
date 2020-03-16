/**
 * 组件：tabbar-item
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

function addUnit(value) {
  if (value == null) {
    return ""
  }

  if (typeof value === "string" && value.indexOf("var") > -1) {
    return value
  }

  if (value >= 0) return value + "px"
  return value
}

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    name: String,
    icon: String,
    dot: Boolean,
    info: String,
    size: {
      type: String,
      value: "40rpx"
    },
    clickable: Boolean
  },
  data: {
    _info: ""
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  const { size, info } = this.properties
  let _info = info.length >= 4 ? info.slice(0, 3) : info
  this.setData({
    _size: addUnit(size),
    _info,
    _maxLen:
      _info.length >= 3
        ? "margin-left: calc(16rpx * " + (_info.length - 2) + ");"
        : ""
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(options, dataHook(["size"], onPropsChange))

/* 初始化样式，将 onPropsChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange
  },

  attached() {
    this.onPropsChange()
  }
})

Component(options)
