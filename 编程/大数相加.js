/* 问题:实现大整数相加运算
var bigint1 = new BigInt('1234232453525454546445451434342153453454545454545454');
var bigint2 = new BigInt('12342324535254545464454514343421554');
console.log(bigint1.plus(bigint2));
例子：
var bigint1 = new BigInt('123');
var bigint2 = new BigInt('923');
console.log(bigint1.plus(bigint2));  // '1046'
*/
function addNum(a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  let res = ''
  while(i >= 0 || j >= 0) {
    let x = 0
    let y = 0
    let sum
    if(i >=0) {
      x = a[i] - '0'
      i--
    }
    if(j >= 0) {
      y = b[j] - '0'
      j--
    }
    sum = x + y + carry
    if(sum >= 10) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }
    res = sum + res
  }
  if(carry) {
    res = carry + res
  }
  return res
}