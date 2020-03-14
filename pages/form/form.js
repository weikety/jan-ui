// form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    style: '',
    list: [{
        key: "test",
        title: "没有推特",
        icon: "twitter-circle-fill",
        default: false,
        type: "switch"
      },

      {
        key: "yooo",
        title: "Github 是啥",
        icon: "github-fill",
        default: false,
        type: "checkbox"
      }
    ],

    list2: [{
        key: "test",
      title: "没有推特",
      icon: "twitter-circle-fill",
        value: true,
      },

      {
        key: "yooo",
        title: "Github 是啥",
        icon: "github-fill",
        value: false,
      },

      {
        key: "yooo1",
        title: "不存在的网站罢了",
        icon: "google-circle-fill",
        value: false,
      }
    ]
  },

  onClick() {
    this.setData({
      style: 'dark'
    })
  },

  onSwitchChange(e) {
    console.log(e)
  },

  onChange(e) {
    console.log(e.detail)
  }
})