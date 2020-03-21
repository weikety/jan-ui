/**
 * 组件：overlay
 * 版本：v0.0.1
 * 维护人：SU
 */
Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: ["custom-class", "customClass"],
  properties: {
    customClass: String,
    show: {
      type: Boolean,
      value: false
    },

    zIndex: {
      type: Number,
      value: 100
    },

    duration: {
      type: Number,
      value: 400
    },

    opacity: {
      type: Number,
      value: 1
    }
  },

  methods: {
    onTap() {
      this.triggerEvent("click")
    }
  }
})
