// upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188407285,2211968961&fm=26&gp=0.jpg']
  },

  log(e) {
    console.log(e)
  },

  before(e) {
    const {
      callback,
      files,
      list
    } = e.detail
    console.log(e)
    callback(true)
  },

  onChange(e) {
    console.log(e)
  }

})