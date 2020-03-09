/**
 * 组件：form-group
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    data: {
      type: Array,
      value: []
    },
    type: {
      type: String,
      value: "switch"
    },
    borderRadius: {
      type: String,
      value: ""
    },
    extraProps: {
      type: Object,
      value: {}
    },
    clickable: Boolean
  },

  data: {
    _data: [
      {
        key: "test",
        title: "测试",
        icon: "github-fill",
        default: false,
        type: "switch"
      },

      {
        key: "yooo",
        title: "测试 checkbox",
        icon: "github-fill",
        default: false,
        type: "checkbox"
      }
    ]
  }
})

/* 监听 class 和 style 变化的方法 */

const onClassChange = function() {
  const { clickable } = this.properties
  /**
   * _class 和 _style 是组件内部维护的，
   * 保存类名和样式的 data
   */
  this.setData({
    _class: `${clickable ? "jan-ripple jan-form-item-clickable" : ""}`
  })
}

options = mixinComponent(options, dataHook(["data", "type"], onClassChange))

/* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onClassChange,

    onFormItemTap(e) {
      const cls = "." + e.currentTarget.dataset.cls
      let target = this.selectComponent(cls)
      if (target) target.onTap()
    },

    onValueChange(e) {
      const { idx, itm } = e.currentTarget.dataset
      const value = e.detail
      this.triggerEvent("change", {
        value,
        index: idx,
        item: itm
      })
    }
  },

  attached() {
    // 在组件加载时执行样式的初始化
    this.onClassChange()
  }
})

Component(options)
