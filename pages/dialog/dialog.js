// pages/dialog/dialog.js
Page({
  data: {
    show: false,
    notifyShow: false
  },

  onShow() {
    this.setData({
      show: true
    })
  },

  onLoad() {
    setTimeout(() => {
      this.setData({
        notifyShow: true
      })
    }, 2000)
  },

  onHide_() {
    console.log('隐藏')
  }


})