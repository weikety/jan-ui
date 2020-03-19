/**
 * 组件：loading
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const getRandomId = function() {
  return (
    "jan-id--" +
    new Date().valueOf() +
    Math.random()
      .toString()
      .replace(".", "")
      .slice(0, 10)
  )
}

const randomId = getRandomId()
Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: ["custom-class", "customClass"],
  properties: {
    customClass: String,
    show: {
      type: Boolean,
      value: false,
      observer: "onLoadingShow"
    },
    size: {
      type: String,
      value: "normal",
      observer: "onPropsChange"
    },
    direction: {
      type: String,
      value: "row"
    },
    text: String,
    useSlot: Boolean,
    maskStyle: {
      type: String,
      value: "background-color: var(--ripple-color);"
    },
    color: {
      type: String,
      value: "var(--font-color)",
      observer: "onPropsChange"
    }
  },

  data: {
    _size: "",
    _color: "",
    _id: randomId,
    _nodeWidth: "0",
    _nodeHeight: "0",
    _loadingMaskShow: false
  },

  methods: {
    onPropsChange() {
      let _size = "normal",
        _color = "color: var(--font-color);border-color:  var(--font-color);"
      let { size, color } = this.properties
      if (["large", "normal", "small", "mini"].includes(size)) _size = size
      if (color) _color = `color: ${color}; border-color: ${color};`
      this.setData({
        _size,
        _color
      })
    },

    onLoadingShow() {
      if (this.properties.show) {
        this.onViewChange(() => {
          setTimeout(() => {
            this.setData({
              _loadingMaskShow: true
            })
          }, 100)
        })
      } else {
        this.setData({
          _loadingMaskShow: false
        })
      }
    },

    onViewChange(cb) {
      const query = wx.createSelectorQuery().in(this)
      let that = this
      query
        .select("#" + randomId)
        .boundingClientRect(function(res) {
          if (res && res.width && res.height) {
            that.setData({
              _nodeWidth: res.width + "px",
              _nodeHeight: res.height + "px"
            })
            if (typeof cb === "function") cb()
          }
        })
        .exec()
    }
  },

  moved() {
    this.onViewChange()
  },

  attached() {
    this.onViewChange()
  }
})
