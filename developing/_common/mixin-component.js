const typeOf = require("./type-of")

const mixinComponent = function(origin = {}, next = {}) {
  if (typeOf(origin) !== "object") origin = {}
  if (typeOf(next) !== "object") next = {}

  for (let key in next) {
    if (typeOf(next[key]) === "object") {
      if (typeOf(origin[key]) === "object") {
        origin[key] = mixinComponent(origin[key], next[key])
      } else {
        origin[key] = next[key]
      }
    } else {
      if (typeOf(origin[key]) == "undefined") origin[key] = next[key]
    }
  }
  return origin
}

module.exports = mixinComponent
