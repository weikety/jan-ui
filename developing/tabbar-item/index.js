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

let parentNode = null

function onParentChange(target) {
  parentNode = target
  const { options } = target.data
  if (options) {
    this.setData({
      _options: options
    })
  }
}

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    customClass: String,
    title: String,
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

  relations: {
    "../tabbar/index": {
      type: "parent", // 关联的目标节点应为父节点
      linked: onParentChange,
      linkChanged: onParentChange
    }
  },

  data: {
    _info: "",
    _active: true,
    _options: {
      activeColor: "var(--info-color, #1989fa)",
      inactiveColor: "var(--font-color, #515a6e)"
    }
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
    onPropsChange,

    onTap() {
      if (parentNode && parentNode.data && parentNode.data.childTap) {
        parentNode.data.childTap({
          title: this.properties.title,
          name: this.properties.name
        })
      }
    },

    setActive(actived) {
      if (typeof actived !== "boolean") return
      this.setData({
        _active: actived
      })
    }
  },

  attached() {
    this.onPropsChange()
  }
})

Component(options)
