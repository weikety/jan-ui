/**
 * 组件：notify
 * 版本：v0.0.1
 * 维护人：Meeken
 */
Component({
  externalClasses: ["custom-class", "customClass"],
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer: "onVisibleChange",
    },
    text: String,
    useSlot: Boolean,
    duration: {
      type: Number,
      value: 3000,
    },
    type: {
      type: String,
      value: "info",
    },
    safeAreaInsetTop: Boolean,
    zIndex: {
      type: Number,
      value: 1000,
    },
  },

  data: {
    animate: "",
    _cb: 0,
  },

  methods: {
    onVisibleChange() {
      const show = this.properties.show
      this.setData({
        animate: show ? "show" : "hide",
      })
      if (show && this.properties.duration) {
        clearTimeout(this.data._cb)
        const _cb = setTimeout(() => {
          this.setData({
            animate: "hide",
          })
          this.triggerEvent("hide")
        }, this.properties.duration)
        this.setData({
          _cb,
        })
      }
      show ? this.triggerEvent("show") : this.triggerEvent("hide")
    },

    onTap() {
      this.triggerEvent("click")
    },
  },

  attached() {},
})
