if(!Promise.allSettled) {
  const resolveHandler = (value) =>({status: 'fullfilled', value})
  const rejectHandler = (reason) => ({status: 'rejected', reason})
  Promise.allSettled = function(promises) {
    const convertedPromise = promises.map((p) => Promise.resolve(p).then(resolveHandler, rejectHandler))
    return Promise.all(convertedPromise)
  }
}