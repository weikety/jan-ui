// refresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    refresherState: false
  },

  onRefresh(e) {
    this.setData({
      refresherState: true
    })
    setTimeout(() => {
      this.setData({
        refresherState: false
      })
    }, 30000)
  },

  onLoad() {
    setTimeout(() => {
      this.setData({
        refresherState: true
      })
    }, 3000)
  },

  onPulling(e) {
    console.log(e)
  }
})