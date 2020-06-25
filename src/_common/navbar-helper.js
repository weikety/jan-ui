const getMenuButtonStyle = function () {
  /* 模拟胶囊键的样式 */
  const menuButton = wx.getMenuButtonBoundingClientRect()
  return `width: ${menuButton.height}px;height: ${menuButton.height}px;top: ${menuButton.top}px;left: calc(100vw - ${menuButton.left}px - ${menuButton.width}px);`
}

const getCustomNavigationBarStyle = function () {
  /* 模拟微信导航栏的样式 */
  const { system } = wx.getSystemInfoSync(),
    menuButton = wx.getMenuButtonBoundingClientRect()
  return `width: 100%;height: calc(${menuButton.top}px + ${
    menuButton.height
  }px + 8px);padding-top: ${
    menuButton.top
  }px;display: flex;flex-direction: row;justify-content: ${
    system.includes("iOS") ? "center" : "flex-start"
  };align-items: center;${
    !system.includes("iOS")
      ? `padding-left: calc(100vw - ${menuButton.left}px - ${menuButton.width}px);`
      : ""
  }padding-bottom: 8px;`
}

const getCustomNavigationBarHeight = function () {
  /* 返回微信导航栏应有的高度 */
  const menuButton = wx.getMenuButtonBoundingClientRect()
  return menuButton.top * 1 + menuButton.height * 1 + 8
}

module.exports = {
  getMenuButtonStyle,
  getCustomNavigationBarStyle,
  getCustomNavigationBarHeight,
}
