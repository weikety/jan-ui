/** 
 * 组件：slider
 * 版本：v0.0.1
 * 维护人：SU
 */
Component({
  properties: {
    value: {
      type: Number,
      value: 0
    },

    disabled: {
      type: Boolean,
      value: false
    },

    min: {
      type: Number,
      value: 0
    },

    max: {
      type: Number,
      value: 100
    },

    step: {
      type: Number,
      value: 1
    }
  },

  attached() {
    this.updateValue(this.data.value);
  },

  methods: {
    onTouchMove(event) {
      if (this.data.disabled) {
        return;
      }

      const { clientX } = event.touches[0];

      wx.createSelectorQuery()
        .in(this)
        .select(".jan-slider")
        .boundingClientRect((item) => {
          const { min, max } = this.data;
          const { left, width } = item;
          const value = (clientX - left) * (max - min) / width + min;
          this.updateValue(value);
        })
        .exec();
    },

    updateValue(value) {
      const { min, max, step, value: currentValue } = this.data;
      if (value < min) {
        value = min;
      } else if (value > max) {
        value = max
      } else if (Math.abs(value - currentValue) < step) {
        return;
      }

      this.setData({
        value
      });

      this.triggerEvent('change', value);
    }
  }
})
