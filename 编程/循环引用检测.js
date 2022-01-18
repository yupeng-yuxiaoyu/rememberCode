function hasCircle(obj) {
  let res = false
  const map = new Map()
  function loop(obj) {
    const keys = Object.keys(obj)
    keys.forEach(key => {
      const value = obj[key]
      if (typeof value == 'object' && value !== null) {
        if (map.has(value)) {
          res = true
          return
        } else {
          map.set(value)
          loop(value)
        }
      }
    })
  }
  loop(obj)
  return res
}
const obj = {
  a: 1,
  b: 2,
 }
 obj.c = obj
 console.log(hasCircle(obj))