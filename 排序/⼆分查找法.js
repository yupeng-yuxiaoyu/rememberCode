// 折半查找算法要求查找表的数据是线性结构存储，还要求查找表中的顺序是由⼩到⼤排序（由⼤到⼩排序）
function binarySearch(arr, target) {
  let max = arr.length - 1
  let min = 0
  while (min <= max) {
    let mid = Math.floor((max + min) / 2)
    if (target < arr[mid]) {
      max = mid - 1
    } else if (target > arr[mid]) {
      min = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

function fn(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const middleIndex = Math.floor((arr.length / 2));
    if (target > arr[middleIndex]) {
      min = middleIndex + 1;
    } else if (target < arr[middleIndex]) {
      max = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}