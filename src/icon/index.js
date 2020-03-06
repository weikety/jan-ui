/**
 * 组件：icon
 * 版本：v0.0.1
 * 维护人：SU
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ""
    },
    size: {
      type: null,
      value: null
    },
    color: {
      type: String,
      value: ""
    },
    prefix: {
      type: String,
      value: "joy-icon"
    }
  },

  methods: {
    onTap(e) {
      this.triggerEvent("click", e)
    }
  }
})
