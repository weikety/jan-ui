/**
 * radio-group
 * 版本：v0.0.2
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    data: {
      type: null,
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
    labelWidth: String,
    rightWidth: String,
    clickable: Boolean
  },

  data: {
    _data: [],
    _labelWidth: "",
    _rightWidth: ""
  }
})

const onPropsChange = function() {
  let { clickable, data, labelWidth, rightWidth } = this.properties
  let whiteList = []

  data = data.map(item => {
    if (typeof item === "object" && item.key && !whiteList.includes(item.key)) {
      whiteList.push(item.key)
      return item
    } else {
      throw new Error(`${JSON.stringify(item)} 必须包含唯一的、非中文的 key！`)
    }
  })

  this.setData({
    _class: `${clickable ? "jan-ripple jan-form-item-clickable" : ""}`,
    _data: data,
    _labelWidth: labelWidth ? `max-width: ${labelWidth};` : "",
    _rightWidth: rightWidth ? `max-width: ${rightWidth};` : ""
  })
}

options = mixinComponent(
  options,
  dataHook(["data", "type", "labelWidth", "rightWidth"], onPropsChange)
)

options = mixinComponent(options, {
  methods: {
    onPropsChange,

    onFormItemTap(e) {
      const cls = "." + e.currentTarget.dataset.cls
      let target = this.selectComponent(cls)
      if (target) target.onTap()
    },

    onRadioChange(e) {
      console.log(e)
    }
  }
})

Component(options)
