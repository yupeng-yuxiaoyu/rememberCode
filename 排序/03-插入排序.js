/**
 * 算法描述：
  从第一个元素开始，该元素可以认为已经被排序
  取出下一个元素，在已经排序的元素序列中从后向前扫描
  如果已排序元素大于新元素，将已排序元素移到下一个位置
  重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
  将新元素插入到改位置后
  重复步骤2-5
 * @param {*} arr
 * @returns
 */
function insertSort(arr) {
  const len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[i] = arr[preIndex--]
    }
    arr[preIndex + 1] = current
  }
  return arr
}
const arr = [2, 4, 6, 1, 3]
console.log(insertSort(arr))
