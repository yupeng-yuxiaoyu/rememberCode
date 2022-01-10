/**
 * 算法描述：
  比较相邻的元素。如果第二个比第一个大，就交换它们两个
  对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数
  针对所有的元素重复以上，除了最后一个
  重复步骤1-3，直到排序完成

  外层for 表示循环每一项，每次选出一个最大值
  内层for 表示每次从第0个逐一比较，因为每次选出过一个最大值，那数量上就要减i，并且要比较j 和 j + 1 所以就要在length上再减 1

  时间复杂度：平均O(n^2)、最坏O(n^2)、最好O(n)
  空间复杂度：O(1)
 * @param {*} arr
 * @returns
 */
function bubbleSort(arr) {
  const len = arr.length;
  for(let i = 0;  i < len; i++) {
    for(let j = 0; j < len - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

const arr = [2, 4, 6, 1, 3]
console.log(bubbleSort(arr))

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       tmp = arr[j]
//       arr[j] = arr[j + 1]
//       arr[j + 1] = tmp
//     }
//   }
// }