

// 深冻结对象函数
function deepFreeze (obj) {
  // 取定义在obj上的属性名
  const propNames = Object.getOwnPropertyNames(obj)

  //在冻结自身之前冻结属性
  propNames.forEach((name) => {
    const prop = obj[name]
    // 如果prop是个对象，冻结它
    if (typeof prop == 'object' && prop !== null) {
      deepFreeze(prop)
    }
  })

  // 冻结自身
  return Object.freeze(obj)
}

// 数组扁平为一维数组
function flatArr (arr = []) {
  const res = arr.reduce((t, v) => {
    return t.concat(Array.isArray(v) ? flatArr(v) : v)
  }, [])
  return res
}
const arr3 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// 数组扁平任意维数组
function flatArr2(arr, deep) {
  const res =  deep > 0? arr.reduce((t,v) => {
    return t.concat(Array.isArray(v)? flatArr2(v, deep - 1) : v)
  }, []) : arr.slice()
  return res
}

console.log(flatArr2(arr3, 2))

console.log(arr3.flat(2))