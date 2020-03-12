/**
 * 组件：rate
 * 版本：v0.0.1
 * 维护人：SU
 */
const janComponent = require("../_common/jan-component")
const mixinComponent = require("../_common/mixin-component")
const dataHook = require("../_common/data-hook")

/* 使用 janComponent 初始化组件配置 */

let options = janComponent({
  properties: {
    name: {
      type: String
    },

    value: {
      type: Number,
      value: 0,
      observer(value) {
        if (value !== this.data._value) {
          this.setData({ _value: value });
        }
      }
    },

    count: {
      type: Number,
      value: 5,
      observer(value) {
        this.setData({ items: new Array(value) });
      }
    },

    size: {
      type: String | Number,
      value: "20px"
    },

    gutter: {
      type: String | Number,
      value: "4px"
    },

    color: {
      type: String,
      value: '#ffd21e'
    },

    voidColor: {
      type: String,
      value: '#c7c7c7'
    },

    icon: {
      type: String,
      value: "star-fill"
    },

    voidIcon: {
      type: String,
      value: "star"
    },

    readonly: {
      type: Boolean,
      value: false
    },

    disabled: {
      type: Boolean,
      value: false
    },

    disabledColor: {
      type: String,
      value: '#bdbdbd'
    },

    touchable: {
      type: Boolean,
      value: true
    },

    allowHalf: {
      type: Boolean,
      value: false
    }
  },

  data: {
    _value: 0,
    items: []
  },

  attached() {
    const { count, value } = this.properties;

    this.setData({
      _value: value,
      items: new Array(count)
    })
  },

  methods: {
    onSelect(event) {
      console.log("onSelect", event);
      const { disabled, readonly } = this.properties;
      const { _value } = this.data;
      const { index } = event.currentTarget.dataset;
      if (!disabled && !readonly && _value !== index) {
        this.setData({ _value: index });
        this.triggerEvent('input', index);
        this.triggerEvent('change', index);
      }
    },

    onTouchMove(event) {
      console.log("onTouchMove", event);
      const { touchable } = this.properties;
      if (!touchable) return;

      const { clientX } = event.touches[0];

      this.getRect('.jan-rate--icon', true).then((list) => {
          const target = list
            .sort(item => item.left - item.right)
            .find(item => clientX >= item.left && clientX <= item.right);
          if (target != null) {
            this.onSelect({
              ...event,
              currentTarget: target
            });
          }
        }
      );
    },

    getRect(selector, all) {
      return new Promise(resolve => {
        wx.createSelectorQuery()
          .in(this)[all ? 'selectAll' : 'select'](selector)
          .boundingClientRect(rect => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }

            if (!all && rect) {
              resolve(rect);
            }
          })
          .exec();
      });
    }
  }
})

// /* 监听 class 和 style 变化的方法 */

// const onClassChange = function() {
//   const {
//     /* 需要读取的属性 */
//   } = this.properties
//   /**
//    * _class 和 _style 是组件内部维护的，
//    * 保存类名和样式的 data
//    */
//   this.setData({
//     _class: `新的类名`
//   })
// }

// const onStyleChange = function() {
//   const {
//     /* 需要读取的属性 */
//   } = this.properties
//   this.setData({
//     _style: `新的样式`
//   })
// }

// /* 使用 dataHook 来监听 props 或 data 的变化 */

// options = mixinComponent(
//   options,
//   dataHook(["这些属性变化，会触发 _style 刷新"], onStyleChange)
// )

// options = mixinComponent(
//   options,
//   dataHook(["这些属性变化，会触发 _class 刷新"], onClassChange)
// )

// /* 初始化样式，将 onStyleChange 和 onClassChange 添加到组件的 methods */

// options = mixinComponent(options, {
//   methods: {
//     onClassChange,
//     onStyleChange
//   },

//   attached() {
//     // 在组件加载时执行样式的初始化
//     this.onClassChange()
//     this.onStyleChange()
//   }
// })

/* 混入其他配置项 */

// options = mixinComponent(options, {
//   /* 要混入的配置项 */
// })

Component(options)
