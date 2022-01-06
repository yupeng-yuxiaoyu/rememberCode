// 1. 累加累乘
function getSum(...values) {
  return values.reduce((total, value) => total + value, 0);
}

function getMul(...values) {
  return values.reduce((total, value) => total * value, 1);
}

const res1 = getSum(1, 2, 3, 4)
// console.log(res1)

const res2 = getMul(1, 2, 3, 4)
// console.log(res2)

// 2. 权重求和
const scores = [
  { score: 90, subject: "chinese", weight: 0.5 },
  { score: 95, subject: "math", weight: 0.3 },
  { score: 85, subject: "english", weight: 0.2 }
];
// const res = scores.reduce((total, value) => total + value.score * value.weight, 0)
// console.log(res)

// 代替reverse
function reverseArr(arr = []) {
  return arr.reduceRight((t, v) => {
    t.push(v);
    return t;
  } , [])
}
const res = reverseArr([1, 2, 3, 4, 5])
console.log(res) // [5,4,3,2,1]

// 3. 代替map和filter
const arr = [0, 1, 2, 3];

// 代替map：[0, 2, 4, 6]
const a = arr.map(v => v * 2);
const b = arr.reduce((arr, v) => {
  arr.push(v * 2);
  return arr;
}, [])

// b的简洁写法
const b1 = arr.reduce((arr, v) => [...arr, v * 2], [])
console.log(b, b1) // [ 0, 2, 4, 6 ] [ 0, 2, 4, 6 ]

// 代替filter：[2, 3]
const c = arr.filter(v => v > 1);
const d = arr.reduce((arr, value) => {
  if(value > 1) {
    arr.push(value)
  }
  return arr;
}, [])

// d的简洁写法
const d1 = arr.reduce((t, v) => v > 1 ? [...t, v] : t, []);
console.log(d, d1) // [ 2, 3 ] [ 2, 3 ]


// 代替map和filter：[4, 6]
const e = arr.map(v => v * 2).filter(v => v > 2);
const f = arr.reduce((t,v) => {
  if(v*2 > 2) {
    t.push(v*2)
  }
  return t;
}, [])

// f的简洁写法
const f1 = arr.reduce((t, v) => v * 2 > 2 ? [...t, v * 2] : t, []);
console.group(f, f1) // [ 4, 6 ] [ 4, 6 ]

// 4. 代替some和every
const scores2 = [
  { score: 45, subject: "chinese" },
  { score: 90, subject: "math" },
  { score: 60, subject: "english" }
];

// 代替some: 至少一门合格
const isAtLeastOneQualified = scores2.reduce((t, v) => {
  return t || v.score >= 60
}, false)

console.log(isAtLeastOneQualified) // true

// 代替every: 全部合格
const isAllQualified = scores2.reduce((t, v) => {
  return t && v.score >= 60
}, true)

console.log(isAllQualified) // false


// 5. 数组过滤
function difference(arr = [], oarr = []) {
  const res = arr.reduce((t, v) => {
    if(!oarr.includes(v)) {
      t.push(v)
    }
    return t
  }, [])
  return res
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6]
console.log(difference(arr1, arr2)); // [1, 4, 5]

// 将二维数组转为一维
function flattened (arr) {
  const res = arr.reduce((acc, cur) => {
    return acc.concat(cur)
  }, [])
}
//
const test = [[0, 1], [2, 3], [4, 5]]
flattened(test) // [0,1,2,3,4,5]

// 6. 数组扁平
function flatArr(arr = []) {
  const res = arr.reduce((t,v) => {
    return t.concat(Array.isArray(v) ? flatArr(v) : v)
  }, [])
  return res
}
const arr3 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(flatArr(arr3)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log([2, 3].concat([4, 5, [6, 7]]))

// 7. 数组去重
function uniq(arr = []) {
  return arr.reduce((t, v) => {
    if(!t.includes(v)){
      t.push(v)
    }
    return t
  }, [])
}
const testArr = [2, 1, 0, 3, 2, 1, 2]
console.log(uniq(testArr)) // [2, 1, 0, 3]

// 8. 数组成员个数统计
function count(arr = []) {
  return arr.reduce((t, v) => {
    if(!t[v]) {
      t[v] = 1
    } else {
      t[v] = t[v] + 1
    }
    return t
  }, {})
}
const countArr = [0, 1, 1, 2, 2, 2];

console.log(count(countArr)) // { '0': 1, '1': 2, '2': 3 }

// 9. 数字千分化（重要）
function ThousandNum(num = 0) {
  const str = (+num).toString().split(".");
  const int = nums => nums.split("").reduce((t, v, i) => t + (i % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
  const dec = nums => nums.split("").reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
  return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0]);
}
console.log(ThousandNum(1234.5678))

// 10. 数组转对象
const people = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "SZ", name: "TYJ", age: 25 }
];

const map = people.reduce((t, v) => {
  const { name, ...res} = v
  t[name] = res
  return t
}, {})

console.log(map)