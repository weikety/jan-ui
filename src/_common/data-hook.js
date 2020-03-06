const dataHook = function(dataList = [], hook) {
  if (
    !dataList instanceof Array ||
    !dataList.length ||
    !dataList.every(item => typeof item == "string")
  )
    return {}
  if (!hook instanceof Function) hook = () => void 0
  let obj = {
      observers: {}
    },
    key = dataList.join(",")
  obj["observers"][key] = hook
  return obj
}

module.exports = dataHook
