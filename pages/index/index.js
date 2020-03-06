const App = getApp()
const mapOpenType = require("../../developing/_common/open-type")
const mixinComponent = require("../../developing/_common/mixin-component")

Page({
  data: {
    color: '#212121'
  },

  onClick(e) {
    this.setData({
      color: this.data.color == '#212121' ? '#515151' : '#212121'
    })
  },

  onLongtap() {
    console.log(`我被长按了`)
  }
})