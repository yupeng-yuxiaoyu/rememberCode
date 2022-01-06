// call的实现
// 处理call第一个参数为null的情况，指向window
// context下挂载一个函数，存储当前xxx.call的function
// 获取除了第一个以外的所有参数
// res = 在当前context下执行fn
// 删除挂载函数
// 返回结果
Function.prototype.call2 = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [...arguments].slice(1);

  var result = context.fn(...args);

  delete context.fn
  return result;
}

function print(age) {
  console.log(this.name + ' ' + age)
}

const obj = {
  name: 'yuxiaoyu'
}

// print.myCall(obj, 1)


// apply实现
// 处理apply第一个参数为null的情况，指向window
// context下挂载一个函数，存储当前xxx.call的function
// 判断是否有参数，带或者不带参数执行
// res = 在当前context下执行fn
// 删除挂载函数
// 返回结果
Function.prototype.apply = function (context, arr) {
  var context = context || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    result = context.fn([...arr])
  }

  delete context.fn
  return result;
}

// print.myApply(obj, 1)

// bind实现
// 返回一个函数
// 可以传入参数
// 可以先后传参，需要合并之前的参数和现在的参数
// 作为构造函数使用的时候，要修改this的指向实例对象，否则指向context
// 为了防止fnbind.prototype的修改会影响到this.prototype，用一个中间函数保存this.prototype 用构造生成fnbind.protorype
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('caller must be a function!')
  }
  const self = this;
  const args = [...arguments].slice(1);
  const fNOP = function () {};
  fNOP.prototype = this.prototype;
  const fBound = function () {
    const bindArgs = [...arguments];
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
  }
  fBound.prototype = new fNOP();
  return fBound;
}