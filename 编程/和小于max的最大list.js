var arr = [19, 10, 2];

function getMaxList(arr, max) {
  arr.sort((a, b) => a - b);
  console.log('arr :>> ', arr);
  let sum = 0;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (sum + item <= max) {
      sum += item;
      res.push(item);
    } else if (sum - res[res.length - 1] + item <= max) {
      sum = sum - res[res.length - 1] + item;
      res.splice(res.length - 1, 1, item);
    }
  }
  return {
    res,
    sum,
  }
}
console.log(getMaxList(arr))