Array.prototype._map = function(fn, callbackThis) {
  // 最终返回的新数组
  let res = [];
  // 定义回调函数的执行环境
  // call第一个参数传入null，则 this指向全局对象，同 map的规则
  let CBThis = callbackThis || null;
  this.reduce((brfore, after, idx, arr) => {
      // 传入map回调函数拥有的参数
      // 把每一项的执行结果push进res中
      res.push(fn.call(CBThis, after, idx, arr));
  }, null);
  return res;
};