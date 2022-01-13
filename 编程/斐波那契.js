function fn(n) {
  if (n === 1 || n === 2) return 1;
  return fn(n - 1) + fn(n - 2);
}

let before = 1;
let gBefore = 1;
function fn(n) {
  if (n === 1 || n === 2) return 1;
  let res
  for (let i = 3; i <= n; i++) {
    res = before + gBefore;
    gBefore = before;
    before = tmp;
  }
  return res;
}
console.log(fn(3))
console.log(fn(6));