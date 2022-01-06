function Promise(executor) {
  var self = this
  self.status = 'pending' // Promise当前的状态
  self.data = undefined // Promise的值
  self.onResolvedCallback = [] // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  self.onRejectedCallback = [] // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.data = value
      for (var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.data = reason
      for (var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }

  try { // 考虑到执行executor的过程中有可能出错，所以我们用try/catch块给包起来，并且在出错后以catch到的值reject掉这个Promise
    executor(resolve, reject) // 执行executor
  } catch (e) {
    reject(e)
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  var self = this
  var promise2

  // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
  onResolved = typeof onResolved === 'function' ? onResolved : function (value) {
    return value
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function (reason) {
    throw reason
  }

  if (self.status === 'resolved') {
    // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
    // 因为考虑到有可能throw，所以我们将其包在try/catch块里
    return promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onResolved(self.data)
        if (x instanceof Promise) { // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
          x.then(resolve, reject)
        }
        resolve(x) // 否则，以它的返回值做为promise2的结果
      } catch (e) {
        reject(e) // 如果出错，以捕获到的错误做为promise2的结果
      }
    })
  }

  // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数，就不再做过多解释
  if (self.status === 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        var x = onRejected(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  if (self.status === 'pending') {
    // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
    // 只能等到Promise的状态确定后，才能确实如何处理。
    // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
    // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
    return promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          var x = onResolved(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function (reason) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

// 为了下文方便，我们顺便实现一个catch方法
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}






// 定义三个常量表示状态
const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      // 如果有错误，就执行reject
      this.reject(error)
    }
  }

  // 初始值是pending
  status = PENDING

  // 成功之后的值
  value = null

  // 失败之后的原因
  reason = null

  // 存储成功回调函数
  onFullfilledCallback = []

  // 存储失败回调函数
  onRejectedCallback = []

  /* resolve和reject为什么要用肩头函数？
   * 如果直接调用的话，普通函数this的指向的是window或者undefined
   * 用箭头函数可以让this指向当前实例对象
   */

  // 更改成功后的状态
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULLFILLED
      // 保存成功之后的值
      this.value = value

      // 将所有成功的回调拿出来执行
      while (this.onFullfilledCallback.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onFullfilledCallback.shift()(value)
      }
    }
  }

  // 更改失败后的状态
  reject = (reason) => {
    if (this.status === PENDING) {
      // 状态修改为失败
      this.status = REJECTED
      // 保存失败后的原因
      this.reason = reason

      // 将所有失败的回调拿出来执行
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }

  then(onFullfilled, onRejected) {
    // 如果不传，就使用默认函数
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    }

    // 为了链式调用这里直接创建一个MyPromise, 并在后面return出去
    const promise2 = new MyPromise((resolve, reject) => {
      const fullfilledMicrotask = () => {
        // 创建一个微任务等待promise2完成初始化
        queueMicrotask(() => {
          try {
            const x = onFullfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

      const rejectedMicrotask = () => {
        // 创建一个微任务等待promise2完成初始化
        queueMicrotask(() => {
          try {
            // 调用失败回调，并且把原因返回
            const x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }


      // 这里的内容在执行器中，会立即执行
      if (this.status === FULLFILLED) {
        fullfilledMicrotask()
      } else if (this.status === REJECTED) {
        rejectedMicrotask()
      } else {
        /* 等待状态
         * 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
         * 等到执行成功失败函数的时候再传递
         */
        this.onFullfilledCallback.push(fullfilledMicrotask)
        this.onRejectedCallback.push(rejectedMicrotask)
      }
    })
    return promise2
  }

  catch (onRejected) {
    this.then(undefined, onRejected)
  } finally(fn) {
    return this.then((value) => {
      return MyPromise.resolve(fn()).then(() => {
        return value
      })
    }, (error) => {
      return MyPromise.resolve(fn()).then(() => {
        throw error
      })
    })
  }

  // resolve静态方法
  static resolve(param) {
    // 如果传入MyPromise 就直接返回
    if (param instanceof MyPromise) {
      return param
    }

    // 转成常规方式
    return new MyPromise(resolve => {
      resolve(param)
    })
  }

  // reject静态方法
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promiseList) {
    return new MyPromise((resolve, reject) => {
      const res = []
      const length = promiseList.length
      let count = 0

      if (length === 0) {
        return resolve(res)
      }

      promiseList.forEach((promise, index) => {
        MyPromise.resolve(promise).then((value) => {
          count++
          res[index] = value
          if (count === length) {
            resolve(res)
          }
        }, (reason) => {
          reject(reason)
        })
      })
    })
  }

  static race(promiseList) {
    return new MyPromise((resolve, reject) => {
      const length = promiseList.length
      if (length === 0) {
        return resolve()
      } else {
        for (let i = 0; i < length; i++) {
          MyPromise.resolve(promiseList[i]).then((value) => {
            return resolve(value)
          }, (reason) => {
            return reject(reason)
          })
        }
      }
    })
  }

  static allSettled = (promiseList) => {
    return new MyPromise((resolve) => {
      const length = promiseList.length
      const res = []
      let count = 0
      if (length === 0) {
        return resolve(res)
      } else {
        for (let i = 0; i < length; i++) {
          const currentPromise = MyPromise.resolve(promiseList[i])
          currentPromise.then((value) => {
            count++
            res[i] = {
              status: 'fulfilled',
              value: value
            }
            if (count === length) {
              return resolve(res)
            }
          }, (reason) => {
            count++
            res[i] = {
              status: 'rejected',
              reason: reason
            }
            if (count === length) {
              return resolve(res)
            }
          })
        }
      }
    })
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // 如果相等，说明return的是自己，抛出错误类型并返回
  if (promise === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // // 判断x是不是MyPromise的实例对象
  // if(x instanceof MyPromise) {
  //   // 执行x, 调用then方法，目的是将其状态变为fullfilled或者rejected
  //   x.then(value => resolve(value), reason => reject(reason))
  //   // x.then(resolve, reject)
  // } else {
  //   resolve(x)
  // }
  if (typeof x === 'object' || typeof x === 'function') {
    // 如果x是null，直接返回，走后面的逻辑会报错
    if (x === null) {
      return resolve(x)
    }

    let then
    try {
      // 把x.then赋值给then
      then = x.then
    } catch (error) {
      return reject(error)
    }

    // 如果then是函数
    if (typeof then === 'function') {
      let called = false
      try {
        then.call(x, y => {
          if (called) return
          called = true
          resolvePromise(promise, y, resolve, reject)
        }, r => {
          if (called) return
          called = true
          reject(r)
        })
      } catch (error) {
        if (called) return
        reject(error)
      }
    } else {
      resolve(x)
    }

  } else {
    resolve(x)
  }
}
MyPromise.deferred = function () {
  var result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}
module.exports = MyPromise;