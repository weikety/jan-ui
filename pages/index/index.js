const App = getApp()
const mapOpenType = require("../../developing/_common/open-type")
const mixinComponent = require("../../developing/_common/mixin-component")

Page({
  data: {
    color: "#212121",
    gutter: "0px",
    show: false
  },

  onClick(e) {
    this.setData({
      color: this.data.color == "#212121" ? "#515151" : "#212121"
    })
  },

  onLongtap() {
    console.log(`我被长按了`)
  },

  changeGutter() {
    this.setData({
      gutter: "20px"
    })
  },
  showPopup() {
    this.setData({
      show: true
    })
  },

  closePopup() {
    this.setData({
      show: false
    })
  },

  handle2Form() {
    wx.navigateTo({
      url: '/pages/form/form',
    })
  }
})