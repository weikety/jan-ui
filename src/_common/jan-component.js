const mixinComponent = require("./mixin-component")

const janComponent = function(options = {}) {
  options = mixinComponent(
    {
      properties: {
        customClass: {
          type: String,
          value: ""
        }
      },
      data: {
        _class: "",
        _style: ""
      },
      methods: {}
    },
    options
  )
  return options
}

module.exports = janComponent
