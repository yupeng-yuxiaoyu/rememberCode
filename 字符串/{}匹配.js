/* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。 */
const s1 = "()[]{}";
const s2 = "([)]";
function fn(str) {
  const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
  const strArr = str.split('');
  const tmp = [];
  for (let i = 0; i < strArr.length; i++) {
    item = strArr[i];
    const inLeft = map.get(item);
    if (inLeft) {
      tmp.push(item);
    } else {
      const left = tmp.pop();
      if (item !== map.get(left)) {
        return false;
      }
    }
  }
  if (tmp.length === 0) return true; 
}
console.log(fn(s1));
console.log(fn(s2));