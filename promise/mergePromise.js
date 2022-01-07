const mergePromise = asyncArray => {
  return new Promise(resolve => {
    let data = [];
    //启用 一个 promise 引用    Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象
    let promise = Promise.resolve();
    asyncArray.forEach(asyncFun => {
      promise = promise.then(asyncFun).then(res => {
        data.push(res);
      });
    });
    return promise.then(() => {
      resolve(data);
    })
  })
}