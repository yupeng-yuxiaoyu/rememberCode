/**
 * fn 表示异步请求，是promise实例
 * delay 表示每次请求之间的延迟
 * retries 表示重试次数
 */
 function retry(fn, delay, retries) {
  return new Promise((resolve, reject) => {
    function innerFn() {
      return fn().then(resolve).catch((error) => {
        console.log(`还有${retries}次机会`)
        if(retries === 0) {
          reject(error)
        } else {
          retries--
          setTimeout(innerFn, delay)
        }
      })
    }
    return innerFn()
  })
}

function test() {
  return new Promise((resolve, reject) => {
    const res = Math.floor(Math.random() * 10)
    return res < 3 ? resolve({id: res, username: 'doudou'}) : reject(new Error(`the ${res} is greater than 3`))
  })
}
retry(test, 1000, 2).then((res) => {
  console.log('res====>', res)
}).catch((err) => {
  console.log('err======>', err)
})