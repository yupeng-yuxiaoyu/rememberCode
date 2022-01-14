function safeGet(data, path) {
  const arr = path.split('.');
  let res;
  let tmp = JSON.parse(JSON.stringify(data));
  arr.forEach((item) => {
    if (tmp[item]) {
      res = tmp = tmp[item];
    } else {
      res = undefined;
    }
  });
  return res;
}
const data = {
  a: {
    b: {
      c: 'hello'
    }
  }
};
console.log(safeGet(data, 'a.b.c')); // => hello
console.log(safeGet(data, 'a.b.c.d')); // => 返回 undefined
console.log(safeGet(data, 'a.b.c.d.e.f.g'));