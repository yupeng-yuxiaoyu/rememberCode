/* 
    this.callback()接受四个参数
    err,content,sourceMap,meta
 */
// 修改replaceLoader.js
module.exports = function(source) {
  console.log(source, this.query)
  // return source.replace('yuxiaoyu', '于晓俞')
  this.callback(null, source.replace('yuxiaoyu', '于晓俞'))
}

// 异步
module.exports = function(source) {
  console.log(source, this.query)
  // 我们使用this.async来处理，他会返回this.callback
  // 定义一个异步处理，告诉webpack，这个loader里有异步事件，在里面调用下这个异步
  // callback 就是 this.callback 注意参数的使用
  const callback = this.async()
  setTimeout(() => {
      callback(null, source.replace('yuxiaoyu', '于晓俞'))
  }, 3000)
}
