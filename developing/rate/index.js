/**
 * 组件：rate
 * 版本：v0.0.2
 * 维护人：SU
 */
const janComponent = require("../_common/jan-component")

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
      value: null
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

Component(options)
