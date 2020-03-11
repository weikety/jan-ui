// form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        key: "test",
        title: "测试",
        default: false,
        type: "switch"
      },

      {
        key: "yooo",
        title: "测试 checkbox",
        icon: "github-fill",
        default: false,
        type: "checkbox"
      }
    ],

    list2: [{
        key: "test",
        title: "测试",
        value: true,
      },

      {
        key: "yooo",
        title: "测试 checkbox",
        icon: "github-fill",
        value: false,
      },

      {
        key: "yooo1",
        title: "测试 checkbox",
        icon: "github-fill",
        value: false,
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