function curry(fn) {
  var len = fn.length;
  return function _curry() {
    var agrs = Array.prototype.slice.call(arguments, 0);
    if (agrs.length >= len) {
      return fn.apply(null, agrs);
    } else {
      return function () {
        var agrs2 = Array.prototype.slice.call(arguments, 0);
        return _curry.apply(null, agrs.concat(agrs2))
      }
    }
  }
}

// function add() {
//   function curry() {
//     return [...arguments].reduce((sum, item) => {
//       return sum + item;
//     }, 0);
//   }
//   const args = [...arguments];
//   return function() {
//     return curry.apply(null, [...arguments].concat(args));
//   }
// }
// console.log(add(1)(2))
// console.log(add(1)(2, 3))
// console.log(add(1, 2)(3))

function add() {
  const args = [...arguments];
  if (args.length >=3) {
    return args.reduce((sum, item) => {
      return sum + item;
    }, 0);
  } else {
    return function() {
      return add.apply(null, [...arguments].concat(args));
    }
  }
}
console.log(add(1)(2)(3))
console.log(add(1)(2, 3))
console.log(add(1, 2)(3))