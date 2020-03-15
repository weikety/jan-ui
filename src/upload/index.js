/**
 * 组件：upload
 * 版本：v0.0.2
 * 维护人：Meeken
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

const formatByte = function(value) {
  if (!value) return 0
  if (typeof value !== "string") return value
  value = value.toLowerCase()
  let res = value
  const rules = {
    gb: 1073741824,
    mb: 1048576,
    kb: 1024,
    b: 8
  }
  for (let keys in rules) {
    if (value.includes(keys)) {
      res = value.replace(keys, "") * rules[keys]
      break
    }
  }
  return res
}

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    list: {
      type: Array,
      value: []
    },
    sizeType: {
      type: Array,
      value: ["original", "compressed"]
    },
    sourceType: {
      type: Array,
      value: ["album", "camera"]
    },
    blankTips: String,
    maxCount: {
      type: Number,
      value: 9
    },
    maxSize: {
      type: String,
      value: ""
    },
    previewImage: {
      type: Boolean,
      value: true
    },
    useAsyncRead: {
      type: Boolean,
      value: true
    },
    disabled: Boolean,
    deletable: {
      type: Boolean,
      value: true
    },
    previewWidth: {
      type: String,
      value: "160rpx"
    },
    previewSpace: {
      type: String,
      value: "22rpx"
    },
    multiple: Boolean,
    useSlot: Boolean,
    imageFit: {
      type: String,
      value: "aspectFill"
    }
  },

  data: {
    _spacing: ""
  }
})

/* 监听 class 和 style 变化的方法 */

const onPropsChange = function() {
  let { list, previewWidth, previewSpace, maxCount } = this.properties
  if (maxCount > 0) {
    list = list.slice(0, maxCount)
  }
  this.setData({
    _list: list,
    _spacing: previewSpace
      ? `margin-right: ${previewSpace};margin-bottom: ${previewSpace};`
      : "",
    _size: previewWidth ? `width: ${previewWidth};height: ${previewWidth};` : ""
  })
}

/* 使用 dataHook 来监听 props 或 data 的变化 */

options = mixinComponent(
  options,
  dataHook(["list", "previewWidth", "previewSpace"], onPropsChange)
)

/* 初始化样式，将 onStyleChange 和 onPropsChange 添加到组件的 methods */

options = mixinComponent(options, {
  methods: {
    onPropsChange,

    onDelete(e) {
      if (this.properties.disabled) return
      const { idx } = e.currentTarget.dataset
      let list = this.data._list
      this.setData({
        _list: list.filter((item, index) => index !== idx)
      })
      this.triggerEvent("delete", {
        index: idx,
        list: this.data._list
      })
    },

    onImageTap(e) {
      if (!this.properties.previewImage || this.properties.disabled) return
      const { img } = e.currentTarget.dataset,
        list = this.data._list
      wx.previewImage({
        current: img,
        urls: list
      })
      this.triggerEvent("preview", {
        img,
        list
      })
    },

    onChooseImage() {
      if (this.properties.disabled) return
      let list = this.data._list
      const {
        maxCount,
        multiple,
        sizeType,
        sourceType,
        useAsyncRead,
        maxSize
      } = this.properties
      let options = {
        sizeType,
        sourceType,
        success: res => {
          const _choose = res.tempFilePaths
          const _chooseFiles = res.tempFiles
          const _maxSize = formatByte(maxSize)
          /* 检查文件大小是否超过限制 */
          if (
            _maxSize > 0 &&
            _chooseFiles.some(item => item && item.size > _maxSize * 1)
          ) {
            this.triggerEvent("oversize", {
              files: _chooseFiles,
              maxSize: _maxSize,
              list
            })
            return
          }
          if (!useAsyncRead) {
            list = list.concat(_choose)
            this.setData({
              _list: list
            })
            this.triggerEvent("after-read", {
              list
            })
          } else {
            /* 利用闭包和 callback 实现异步确认 */
            let cb = function(canIRecieve) {
              if (canIRecieve) {
                this.list = this.list.concat(this._choose)
                this.that.setData({
                  _list: this.list
                })
                this.that.triggerEvent("after-read", {
                  current: this.list
                })
              }
            }
            this.triggerEvent("before-read", {
              callback: cb.bind({
                that: this,
                list,
                _choose
              }),
              list,
              files: _choose
            })
          }
        }
      }
      if (multiple && maxCount > 0) {
        options.count = maxCount - list.length
      } else {
        options.count = 1
      }
      wx.chooseImage(options)
    }
  }
})

Component(options)
