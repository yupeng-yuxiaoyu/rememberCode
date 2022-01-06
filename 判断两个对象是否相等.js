function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

function isEqual (obj1, obj2) {
  // 1. 判断是否为对象：如果两者有不是对象，比较数值
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  // 2. 两者都是对象，判断是否是同一个对象
  if (obj1 === obj2) {
    return true
  }

  // 3. 两个都是对象或数组，而且不全等，比较个数
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }

  // 4. 以obj1为基准，和obj2依次进行比较
  for (const key in obj1) {
    // console.log(1111)
    // console.log(obj1[key], obj2[key])
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }
  return true
}


const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  },
  c: [1, 2]
}
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  },
  c: [1, 2]
}

console.log(isEqual(obj1, obj2))