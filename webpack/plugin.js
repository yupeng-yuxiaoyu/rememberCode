// 创建一个plugin文件夹 创建文件TxtWebpackPlugin.js
/* 
    插件是由一个构造函数（此构造函数上的 prototype 对象具有 apply 方法）的所实例化出来的。这个 apply 方法在安装插件时，会被 webpack compiler 调用一次。apply 方法可以接收一个 webpack compiler 对象的引用，从而可以在回调函数中访问到 compiler 对象。
 */
    class TxtWebpackPlugin {
      constructor() {}
      apply(compiler) {
          // compiler.hooks中存放这各种钩子，emit在编译成功时输出文件前执行的事件
          // 有些插件 hooks 是异步的。想要 tap(触及) 某些 hooks，我们可以使用同步方式运行的 tap 方法，或者使用异步方式运行的 tapAsync 方法或 tapPromise 方法。
          compiler.hooks.emit.tapAsync('TxtWebpackPlugin', (compilation, callback) => {
              // 处理异步的事情
              let content = '生成的文件列表：\n'
              for (var filename in compilation.assets) {
                  content += filename + '\n'
              }
              compilation.assets['filelist.txt'] = {
                  source: function () {
                      return content
                  },
                  size: function () {
                      return content.length
                  }
              }
              callback()
          });
      }
  }
  module.exports = TxtWebpackPlugin
  