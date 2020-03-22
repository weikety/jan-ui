const mapScrollView = function() {
  return {
    properties: {
      scrollX: Boolean,
      scrollY: {
        type: Boolean,
        value: true
      },
      upperThreshold: {
        type: Number,
        value: 50
      },
      owerThreshold: {
        type: Number,
        value: 50
      },
      scrollTop: Number,
      scrollLeft: Number,
      scrollIntoView: String,
      scrollWithAnimation: Boolean,
      enableBackToTop: {
        type: Boolean,
        value: true
      },
      enableFlex: Boolean,
      scrollAnchoring: Boolean
    },
    methods: {
      $emit(type, e) {
        this.triggerEvent(type, e)
      }
    }
  }
}

module.exports = mapScrollView
