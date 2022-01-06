Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p).then((val) => {
        resolve(val)
      }, (err) => {
        reject(err)
      })
    })
  })
}