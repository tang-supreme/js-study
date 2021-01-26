/**
 * 获取时间差
 * @param {TIME} time1 时间节点1
 * @param {TIME} time2 时间节点2
 * @return { Object } 以对象形式返回时间差
 */
function getTimeDifference(time1, time2) {
  var diffTime = Math.round(Math.abs(time1.getTime() - time2.getTime()) / 1000)
  var day = parseInt(diffTime / (60 * 60 * 24))
  var hours = parseInt(diffTime % (60 * 60 * 24) / (60 * 60))
  var minutes = parseInt(diffTime % (60 * 60) / 60)
  var seconds = diffTime % 60

  return {
    day: day,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

/**
 * 范围内的随机整数
 * @param {NUMBER} a 数字1
 * @param {NUMBER} b 数字2
 * @return { NUMBER } 随机数字
 */
function rangeRandom(a, b) {
  var max = Math.max(a, b)
  var min = Math.min(a, b)
  var res = Math.floor(Math.random() * (max - min + 1) + min)
  return res
}

/**
 * 生成一个随机颜色字符串
 * @param {BOOLEAN} type 是否十六进制返回
 * @return {STRING} 随机颜色的字符串
 */
function randomColor(type) {
  if (!type) {
    var res = 'rgb(' + rangeRandom(0, 255) + ', ' + rangeRandom(0, 255) + ', ' + rangeRandom(0, 255) + ')'
    return res
  }

  var str = '#'
  for (var i = 0; i < 3; i++) {
    var n = rangeRandom(0, 255).toString(16)
    if (n.length === 1) n = '0' + n
    str += n
  }
  return str
}

/**
 * 解析查询字符串
 * @param { STRING } str 要解析的查询字符串
 * @return { OBJECT } 解析后的结果
 */
function parseQueryString(str) {
  var obj = {}
  if (str) {
    var tmp = str.slice(1).split('&')
    tmp.forEach(function (item) {
      var t = item.split('=')
      obj[t[0]] = t[1]
    })
  }
  return obj
}

/**
 * 获取元素样式
 * @param { ELEMENT } ele 要获取样式得元素
 * @param { STRING } style 要获取得样式字符串
 * @return { STRING } 获取到得元素得样式
 */
function getStyle(ele, style) {
  // 判断 window 里面有没有 getComputedStyle()
  if ('getComputedStyle' in window) {
    // 标准浏览器
    return window.getComputedStyle(ele)[style]
  } else {
    // IE 低版本
    return ele.currentStyle[style]
  }
}

/**
 * 事件绑定的兼容处理
 * @param { ELEMENT } ele 事件源
 * @param { STRING } type 事件类型
 * @param { FUNCTION } handler 事件处理函数
 */
function on(ele, type, handler) {
  if (!ele) throw new Error('请按照规则传递参数')
  if (ele.nodeType !== 1) throw new Error('事件源有问题')
  if (ele.addEventListener) {
    ele.addEventListener(type, handler)
  } else if (ele.attachEvent) {
    ele.attachEvent('on' + type, handler)
  } else {
    ele['on' + type] = handler
  }
}

/**
 * 事件解绑的兼容处理
 * @param { ELEMENT } ele 事件源
 * @param { STRING } type 事件类型
 * @param { FUNCTION } handler 事件处理函数
 */
function off(ele, type, handler) {
  if (!ele) throw new Error('请按照规则传递参数')
  if (ele.nodeType !== 1) throw new Error('事件源有问题')

  // 处理解绑的兼容
  if (ele.removeEventListener) {
    ele.removeEventListener(type, handler)
  } else if (ele.detachEvent) {
    ele.detachEvent('on' + type, handler)
  } else {
    ele['on' + type] = null
  }
}
