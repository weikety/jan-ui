/**
 * 组件：col
 * 版本：v0.0.2
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  relations: {
    "../row/index": {
      type: "parent", // 关联的目标节点应为父节点
      linked: function(target) {
        const { _gutter } = target.data
        if (_gutter) {
          this.setData({
            _gutter
          })
        }
      }
    }
  },
  properties: {
    span: {
      type: String,
      value: ""
    },
    offset: {
      type: String,
      value: ""
    }
  },
  data: {
    _gutter: ""
  }
})

/* 监听 class 和 style 变化的方法 */

const onStyleChange = function() {
  let { span, offset } = this.properties,
    gutter = this.data._gutter
  if (span >= 0) {
    span = Math.floor(span)
  } else {
    span = 0
  }
  if (offset >= 0) {
    offset = Math.floor(offset)
  } else {
    offset = 0
  }
  if (!gutter) gutter = "0px"
  this.setData({
    _style: `width: calc(${span *
      4.1666}% - ${gutter});margin-left: calc(${offset * 4.1666}% + ${gutter});`
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(options, dataHook(["span", "offset"], onStyleChange))

options = mixinComponent(options, {
  methods: {
    onStyleChange,
    setGutter(gutter) {
      this.setData({
        _gutter: gutter
      })
      this.onStyleChange()
    }
  },

  attached() {
    // 在组件加载时执行样式的初始化
    this.onStyleChange()
  }
})

Component(options)
