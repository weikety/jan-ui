// form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        key: "test",
        title: "测试",
        icon: "github-fill",
        default: false,
        type: "switch"
      },

      {
        key: "yooo",
        title: "测试 checkbox",
        icon: "github-fill",
        default: false,
        type: "checkbox"
      },

      {
        key: "yoodo",
        title: "测试 checkbox",
        icon: "github-fill",
        default: '',
        type: "field",
        extraProps: {
          
        }
      }
    ]
  },

  onSwitchChange(e) {
    console.log(e)
  },

  onChange(e) {
    console.log(e.detail)
  }
})