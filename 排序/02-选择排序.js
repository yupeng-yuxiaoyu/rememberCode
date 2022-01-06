/**
 * 算法描述：
  首先在未排序序列中找到最小(大)元素，存放到排序序列的起始位置
  再从剩余未排序元素中继续寻找最小(大)元素，然后放到已排序序列的末尾
  重复第二步，直到所有元素均排序完毕
  时间复杂度：平均、最好、最坏都是O(n^2)
  空间复杂度：O(1)
 * @param {*} arr
 * @returns
 */
function selectSort(arr) {
  const len = arr.length
  let minIndex
  for(let i = 0; i < len - 1; i++) {
    minIndex = i
    for(let j = i + 1; j < len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if(i !== minIndex) {
      const temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}

const arr = [2, 4, 6, 1, 3]
console.log(selectSort(arr))