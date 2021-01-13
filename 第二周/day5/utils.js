// 准备一个函数叫做on
// 用来添加事件的

/*
  给谁绑定
  绑定什么事件
  事件处理函数是什么
*/

function on(ele,type,fn){
  if(ele.addEventListener){
    ele.addEventListener(type,fn)
  }else{
    ele.attachEvent('on'+type,fn)
  }
}

function off(ele,type,fn){
  if(ele.removeEventListener){
    ele.removeEventListener(type,fn)
  }else{
    ele.detachEvent('on'+type,fn)
  }
}