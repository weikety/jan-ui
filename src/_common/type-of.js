const typeOf = obj =>
  /\[object (.+?)\]/g.exec(Object.prototype.toString.call(obj))[1].toLowerCase()

module.exports = typeOf
