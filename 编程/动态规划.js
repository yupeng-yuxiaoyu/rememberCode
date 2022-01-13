// [['A','B'], ['a','b'], ['1', '2']]，输出 ['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']
/**
 * 动态规划，下一次的结果，依赖上一次的结果
 * @param {array} arr 
 */
function permutate(arr) {
  // 第一次的结果就是二维数组的第0项
  let res = arr[0].slice();

  for (let i = 1; i < arr.length; i++) {
    const pre = res.slice();
    res = [];
    pre.forEach(item => {
      arr[i].forEach(curr => {
        res.push(item + curr)
      })
    });
  }
  console.log(res)
  return res;
}

// [['A', 'B', 'C'],[ 'A1', 'B1', 'C1'],[ 'A2', 'B2']]，输出["AA1A2", "BA1A2", "CA1A2", "AB1A2", "BB1A2", "CB1A2", "AC1A2", "BC1A2", "CC1A2", "AA1B2", "BA1B2", "CA1B2", "AB1B2", "BB1B2", "CB1B2", "AC1B2", "BC1B2", "CC1B2"]

function serialArray(arr) {
  var lengthArr = [];
  var productArr = [];
  var result = [];
  var length = 1;
  for (var i = 0; i < arr.length; i++) {
    var len = arr[i].length;
    lengthArr.push(len);
    var product = i === 0 ? 1 : arr[i - 1].length * productArr[i - 1];
    productArr.push(product);
    length *= len;
  }
  for (var i = 0; i < length; i++) {
    var resultItem = '';
    for (var j = 0; j < arr.length; j++) {
      resultItem += arr[j][Math.floor(i / productArr[j]) % lengthArr[j]];
    }
    result.push(resultItem);
  }
  return result
}
console.log(serialArray([['A','B'], ['a','b'], ['1', '2']]))