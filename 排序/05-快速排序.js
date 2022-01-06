/**
 * 算法描述：
  1. 从数列中挑出一个元素，称为“基准”
  2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
  3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
  时间复杂度：平均 、最好O(nlogn) 最坏O(n^2)
  空间复杂度：O(logn)
 * @param {*} arr
 * @returns
 */
function quickSort(arr) {
  if(arr.length <= 1) return arr
  let privotIndex = Math.floor(arr.length / 2)
  let privot = arr.splice(privotIndex, 1)[0]
  let left = [], right = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < privot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([privot], quickSort(right))
}
const arr = [2, 4, 6, 1, 3]
console.log(quickSort(arr))