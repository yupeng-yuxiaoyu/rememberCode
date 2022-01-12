// 例: abbcccddddd -> 字符最多的是d，出现了5次
let str = "abcabcabcbbccccc";
let num = 0;
let char = '';
// 使其按照⼀定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"
// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re, (value, item) => {
  if (num < value.length) {
    num = value.length;
    char = item;
  }
});
console.log(`字符最多的是${char}，出现了${num}次`);