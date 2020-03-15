/** 
 * 组件：progress-linear
 * 版本：v0.0.1
 * 维护人：SU
 */
Component({
  properties: {
    // 当前进度的百分比
    value: {
      type: Number,
      value: 0
    },

    // 主色
    color: String,

    // 背景不透明度
    backgroundOpacity: {
      type: Number,
      value: 0.3
    },

    // 进度条高度
    height: {
      type: Number | String,
      value: 4
    }
  }
})
