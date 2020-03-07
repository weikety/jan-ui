const hex2Rgb = function(color) {
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  color = color.toLowerCase()
  if (color.length == 9) color = color.slice(0, 7)
  if (reg.test(color)) {
    if (color.length === 4) {
      let colorNew = "#"
      for (let i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
      }
      color = colorNew
    }
    let colorChange = []
    for (let i = 1; i < 7; i += 2) {
      colorChange.push(parseInt("0x" + color.slice(i, i + 2)))
    }
    return colorChange
  } else {
    if (color.includes("rgb")) {
      color = color
        .replace(/(rgba|rgb)/, "")
        .replace("(", "")
        .replace(")", "")

      if (color.includes(",")) {
        return color
          .split(",")
          .map(item => item * 1)
          .slice(0, 3)
      } else {
        return [0, 0, 0]
      }
    } else {
      return [0, 0, 0]
    }
  }
}

const isTextDeepColor = function(backgroundRgbArr = [255, 255, 255]) {
  if (
    !(
      backgroundRgbArr instanceof Array &&
      backgroundRgbArr.length === 3 &&
      backgroundRgbArr.every(item => item >= 0 && item <= 255)
    )
  )
    return false

  const grayLevel =
    backgroundRgbArr[0] * 0.299 +
    backgroundRgbArr[1] * 0.587 +
    backgroundRgbArr[2] * 0.114
  return grayLevel >= 192
}

module.exports = {
  hex2Rgb,
  isTextDeepColor
}
