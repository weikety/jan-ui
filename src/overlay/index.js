/** 
 * 组件：overlay
 * 版本：v0.0.1
 * 维护人：SU
 */
Component({
  properties: {
    customClass: String,
    show: {
      type: Boolean,
      value: false
    },

    "zIndex": {
      type: Number,
      value: 100
    },

    duration: {
      type: Number,
      value: 400
    },
  },

  methods: {
    onTap() {
      this.triggerEvent("click")
    }
  }
})
