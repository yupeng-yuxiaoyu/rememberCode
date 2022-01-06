Promise.prototype.finally = function(callback) {
  // this指向的是Promise.prototype，this.constructor是Promise构造函数
  let P = this.constructor
  // then方法是挂载在Promise.prototype下，所以用this来调用而不是用P
  // then方法resolve和reject都调用了callback，并且又返回一个promise，也就是说finally之后还可以调用then的方法。
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  )
}