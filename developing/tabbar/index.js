/**
 * 组件：tabbar
 * 版本：v0.0.1
 * 维护人：Meeken
 */
let that = {}

function setItemsActive(activeName) {
  this.getRelationNodes("../tabbar-item/index").forEach((item, index) => {
    if (activeName) {
      item.setData({
        _active: activeName == item.properties.name
      })
    } else {
      item.setData({
        _active: index == 0
      })
    }
  })
}

function setItemsActive(activeName) {
  this.getRelationNodes("../tabbar-item/index").forEach((item, index) => {
    if (activeName) {
      item.setData({
        _active: activeName == item.properties.name
      })
    } else if (this.properties.activeName) {
      item.setData({
        _active: this.properties.activeName == item.properties.name
      })
    } else {
      item.setData({
        _active: index == 0
      })
    }
  })
}

Component({
  relations: {
    "../tabbar-item/index": {
      type: "child",
      linked() {
        setItemsActive.call(this)
      }
    }
  },

  properties: {
    activeName: String,
    activeColor: {
      type: String,
      value: "var(--info-color, #1989fa)",
      observer: "onPropsChange"
    },
    inactiveColor: {
      type: String,
      value: "var(--font-color, #515a6e)",
      observer: "onPropsChange"
    }
  },

  data: {
    options: {
      activeColor: "var(--info-color, #1989fa)",
      inactiveColor: "var(--font-color, #515a6e)"
    },
    childTap(e) {
      that.onChildTap(e.name)
      that.triggerEvent("change", e)
    }
  },

  methods: {
    setItemsActive,

    onChildTap(name) {
      this.setItemsActive(name)
    },

    onPropsChange() {
      const { activeColor, inactiveColor } = this.properties
      this.setData({
        options: {
          activeColor,
          inactiveColor
        }
      })
    }
  },

  attached() {
    this.setItemsActive()
    that = this
  }
})
