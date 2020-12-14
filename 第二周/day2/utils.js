function fn(a, b) {
  // 先要拿到一个最大值，一个最小值
  var min = Math.min(a, b)
  var max = Math.max(a, b)

  var res = Math.floor(Math.random() * (max - min + 1)) + min

  // 把结果返回出去
  return res
}
