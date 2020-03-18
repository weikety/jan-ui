function isIphoneX() {
  var systemInfo = wx.getSystemInfoSync()
  return !!(
    systemInfo &&
    systemInfo.model &&
    systemInfo.model.indexOf("iPhone X") > -1
  )
}

module.exports = {
  isIphoneX: isIphoneX
}
