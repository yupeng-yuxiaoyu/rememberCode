Promise.myAll = function(promises) {
  let result = []
  let count = 0
  let len = promises.length
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      Promise.reaolve(p).then((res) => {
        count++
        result[index] = res
        if(count === len) {
          resolve(result)
        }
      }, (err) => {
        reject(err)
      })
    })
  })
}