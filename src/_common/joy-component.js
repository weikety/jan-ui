const mixinComponent = require("./mixin-component")

const joyComponent = function(options = {}) {
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

module.exports = joyComponent
