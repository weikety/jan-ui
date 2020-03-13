const App = getApp()
const mapOpenType = require("../../developing/_common/open-type")
const mixinComponent = require("../../developing/_common/mixin-component")

Page({
  data: {
    color: "#212121",
    gutter: "0px",
    show: false,
    position: "center"
  },

  onClick(e) {
    console.log(e)
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

  showPopupCenter() {
    this.setData({
      show: true,
      position: "center"
    })
  },
  showPopupLeft() {
    this.setData({
      show: true,
      position: "left"
    })
  },
  showPopupRight() {
    this.setData({
      show: true,
      position: "right"
    })
  },
  showPopupTop() {
    this.setData({
      show: true,
      position: "top"
    })
  },
  showPopupBottom() {
    this.setData({
      show: true,
      position: "bottom"
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