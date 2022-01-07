function limitLoad(urls, handler, limit) {
  // 对数组做一个拷贝
  const sequence = [].concat(urls)
  let promises = [];

  //并发请求到最大数
  promises = sequence.splice(0, limit).map((url, index) => {
      // 这里返回的 index 是任务在 promises 的脚标，
      //用于在 Promise.race 之后找到完成的任务脚标
      return handler(url).then(() => {
          return index
      });
  });

  let p = Promise.race(promises);
  for (let i = 0; i < sequence.length; i++) {
      p = p.then((res) => {
          promises[res] = handler(sequence[i]).then(() => {
              return res
          });
          return Promise.race(promises)
      })
  }
}