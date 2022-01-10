// const  arr = []
// const dispose1 = push(arr, '1')
// const dispose2 = push(arr, '2')
// const dispose3 = push(arr, '3')
// dispose2() // arr: [1, 3]

function push(arr, value) {
  let v = value
  const index = arr.push(v) - 1;
  return function() {
    arr.splice(index, 1)
    return arr
  }
}

let arr = []
let v1 = push(arr, 1)
let v2 = push(arr, 2)
let v3 = push(arr, 3)
console.log(v3())