function hasCircle(obj) {
  let hasCircle = false
  const map = new Map()
  function loop(obj) {
    const keys = Object.keys(obj)
    keys.forEach(key => {
      const value = obj[key]
      if (typeof value == 'object' && value !== null) {
        if (map.has(value)) {
          hasCircle = true
          return
        } else {
          map.set(value)
          loop(value)
        }
      }
    })
  }
  loop(obj)
  return hasCircle
}
const obj = {
  a: 1,
  b: 2,
 }
 obj.c = obj
 console.log(hasCircle(obj))