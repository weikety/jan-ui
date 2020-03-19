/**
 * 组件：tag
 * 版本：v0.0.1
 * 维护人：Meeken
 */
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

Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: ["custom-class", "customClass"],
  properties: {
    customClass: String,
    type: {
      type: String,
      value: "primary",
      observer: "selectStyle"
    },
    size: {
      type: String,
      value: "mini",
      observer: "selectStyle"
    },
    bgColor: {
      type: String,
      observer: "selectStyle"
    },
    textColor: {
      type: String,
      observer: "selectStyle"
    },
    plain: {
      type: Boolean,
      observer: "selectStyle"
    },
    round: {
      type: Boolean,
      observer: "selectStyle"
    }
  },

  data: {
    _style: ""
  },

  attached() {
    this.selectStyle()
  },

  methods: {
    selectStyle() {
      const { type, bgColor, textColor, plain, round, size } = this.properties
      let _bgColor = "",
        _shape = "",
        _border = "",
        _textColor = "",
        _fontSize = ""
      // 设置背景色
      _bgColor = `background-color: var(--${type}-color);`
      if (bgColor) _bgColor = `background-color: ${bgColor};`
      // 设置文本色
      _textColor = "color: #fff;"
      if (textColor) _textColor = `color: ${textColor};`
      // 设置 tag 字号
      _fontSize =
        size > 0
          ? `font-size: ${utils.addUnit(size)};`
          : `font-size: var(--font-size-${size});`
      _shape = "border-radius: 6rpx;"
      // 圆角样式
      if (round) {
        _shape =
          size > 0
            ? `border-radius: ${utils.addUnit(size)};`
            : `border-radius: var(--font-size-${size});`
      }
      // 空心样式
      if (plain) {
        _bgColor =
          `background-color: inherit;` +
          `border: 2rpx solid ${textColor ||
            bgColor ||
            `var(--${type}-color)`};`
        _textColor = `color: ${textColor || bgColor || `var(--${type}-color)`};`
      }
      this.setData({
        _style: _bgColor + _shape + _border + _fontSize + _textColor
      })
    }
  }
})
