function defineReactive(target, key, value) {
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: true,
    get() {
      console.log(`读取${value}`)
      return value
    },
    set(newVal) {
      console.log(`写入: ${value}: ${newVal}`)
      value = newVal
    }
  })
}
let obj = {
  name: 'yupeng',
  age: 28,
}
Object.keys(obj).forEach(k => {
  defineReactive(obj, k, obj[k])
})
obj.age = 18;