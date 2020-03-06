// developing/icon/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    size: null,
    color: String,
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
