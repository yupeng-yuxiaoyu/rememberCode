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