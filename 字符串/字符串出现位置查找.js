// 请使⽤最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第⼀次出现的位置（找不到返回 -1）
a = '34';
b = '1234567'; // 返回 2
a = '35';
b = '1234567'; // 返回 -1
a = '355';
b = '12354355'; // 返回 5
isContain(a, b);

function isContain(a, b) {
  for (let i in b) {
    if (a[0] === b[i]) {
      let tmp = true;
      for (let j in a) {
        if (a[j] !== b[Number(i) + Number(j)]) {
          tmp = false;
        }
      }
      if (tmp) {
        return i;
      }
    }
  }
  return -1
}