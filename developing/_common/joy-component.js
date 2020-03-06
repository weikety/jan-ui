const mixinComponent = require("./mixin-component")

const joyComponent = function(options = {}) {
  options = mixinComponent(
    {
      properties: {},
      data: {},
      methods: {}
    },
    options
  )
  return options
}

module.exports = joyComponent
