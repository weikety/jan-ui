/** 
 * 组件：overlay
 * 版本：v0.0.1
 * 维护人：SU
 */
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },

    "zindex": {
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
