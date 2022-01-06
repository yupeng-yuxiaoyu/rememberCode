/**
 * 算法描述
  把长度为n的输入序列分成两个长度为n/2的子序列；
  对这两个子序列分别采用归并排序；
  将两个排序好的子序列合并成一个最终的排序序列。
  时间复杂度：平均、最好、最坏O(nlogn)
  空间复杂度：O(n)
 * @param {*} arr
 * @returns
 */
function mergeSort(arr) {
  const len = arr.length
  if(len <= 1) return arr
  let mid = Math.floor(len/2),
      left = arr.slice(0, mid),
      right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const res = []
  while(left.length && right.length) {
    if(left[0] <= right[0]){
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while(left.length) {
    res.push(left.shift())
  }
  while(right.length) {
    res.push(right.shift())
  }
  return res
}
const arr = [2, 4, 6, 1, 3]
console.log(mergeSort(arr))