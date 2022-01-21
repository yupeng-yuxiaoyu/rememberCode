/* 
例子1.  "<div><a></a></div>", 返回true，是一个完整闭合的html片断,
例子2. "<div><span></div></span>"返回false
 */
function isValidHtml(str) {
  const arr = str.replace(/(\>\<)|(\>\<\/)/g, '.').replace(/[\<|\>]/g, '').split('.');
  console.log(arr);
  const tmp = [];
  arr.forEach((item) => {
    if (item.indexOf('/') === 0 && ('/' + tmp[tmp.length - 1]) === item) {
      tmp.pop();
    } else {
      tmp.push(item);
    }
  });
  return tmp.length === 0;
}
console.log(isValidHtml('<div><a></a></div>'));
console.log(isValidHtml('<div><span></div></span>'));