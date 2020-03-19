const mixinComponent = require("./mixin-component")

const janComponent = function(options = {}) {
  options = mixinComponent(
    {
      options: {
        addGlobalClass: true
      },
      externalClasses: ["custom-class", "customClass"],
      properties: {},
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
