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
