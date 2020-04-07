/**
 * 组件：navbar
 * 版本：v0.0.1
 * 维护人：Meeken
 */
const {
  getCustomNavigationBarStyle,
  getCustomNavigationBarHeight,
} = require("../_common/navbar-helper")
Component({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ["custom-class", "customClass"],
  properties: {
    backgroundColor: {
      type: String,
      value: "var(--bg-color)",
    },
    color: {
      type: String,
      value: "var(--font-color)",
    },
    customStyle: String,
    nodeStyle: String,
    isFixed: {
      type: Boolean,
      value: true,
      observer: "onFixedChange",
    },
    zIndex: {
      type: Number,
      value: 10,
    },
  },

  data: {
    navigatorBarStyle: getCustomNavigationBarStyle(),
    navigatorBarHeight: getCustomNavigationBarHeight(),
    _fixed: "position: fixed; z-index: 3;top: 0;",
  },

  methods: {
    onFixedChange() {
      const isFixed = this.properties.isFixed
      this.setData({
        _fixed: isFixed ? "position: fixed; z-index: 3;top: 0;" : "",
      })
    },
  },

  attached() {},
})
