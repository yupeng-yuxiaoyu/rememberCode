if(!Promise.allSettled) {
  const resolveHandler = (value) =>({status: 'fullfilled', value})
  const rejectHandler = (reason) => ({status: 'rejected', reason})
  Promise.allSettled = function(promises) {
    const convertedPromise = promises.map((p) => Promise.resolve(p).then(resolveHandler, rejectHandler))
    return Promise.all(convertedPromise)
  }
}

function allSettled(promises) {
  if (promises.length === 0) {
    return Promise.resolve([])
  }

  const results = []
  let completed = 0
  return new Promise((resolve) => {
    for (let i = 0; i< promises.length; i++) {
      Promise.resolve(promises[i])
        .then(value => {
          results[i] = { status: 'fulfilled', value }
        })
        .catch(reason => {
          results[i] = { status: 'rejected', reason }
        })
        .finally(() => {
          completed++
          if (completed === promises.length) {
            resolve(results)
          }
        })
    }
  })
}
