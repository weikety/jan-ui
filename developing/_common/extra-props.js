const extraProps = function(props, extra) {
  if (typeof extra !== "object") return props
  for (let key in props) {
    if (extra[key]) props[key] = extra[key]
  }
  return props
}

module.exports = extraProps
