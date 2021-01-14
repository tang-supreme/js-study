// 准备一个函数叫做on
// 用来添加事件的

/*
  给谁绑定
  绑定什么事件
  事件处理函数是什么
*/

function on(ele,type,fn){
  // 要进行兼容处理
  // console.log(ele.addEventListener)
  // 判断有没有 addEventListener

  if(ele.addEventListener){
    // 进入到if条件，证明ele.addEventListener是一个函数地址
    // 证明有这个东西
    ele.addEventListener(type,fn)
  }else{
    // 进入到else，证明ele.addEventListener是一个undefined 
    // 证明没有这个东西
    ele.attachEvent('on'+type,fn)
  }
  // 有我就使用
  // 没有就用另一个
}

// 移除事假也有兼容性问题
// 封装一个移除事件处理函数

/*
  你要移除那个元素
  移除什么事件
  移除哪一个事件处理函数
*/
function off(ele,type,fn){
  // 要进行条件判断
  if(ele.removeEventListener){
    ele.removeEventListener(type,fn)
  }else{
    ele.detachEvent('on'+type,fn)
  }
}