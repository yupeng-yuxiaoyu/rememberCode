function instance_of(L, R) { // L表示左表达式，R表示右表达式
  const O = R.prototype; //  取R的显示原型
  // L = L.__proto__; // 取L的隐式原型
  L = Object.getPrototypeOf(L)
  while(true) {
    // Object.prototype.__proto__ === null
    if(L === null) {
      return false;
    }
    if(L === O) { // 这里重点：当 L 严格等于 O 时，返回 true
      return true;
    }
    // L = L.__proto__;
    L = Object.getPrototypeOf(L)
  }
}

// 测试
function C(){}
function D(){}

var o = new C();

console.log(instance_of(o, C)); // true
console.log(instance_of(o, D)); // false