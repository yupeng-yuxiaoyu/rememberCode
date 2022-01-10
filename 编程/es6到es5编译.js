// ES6
class ComponentA {
  constructor() {
    this.property = "Proppy";
  }
  doStuff() {
    console.log("doStuff");
  }
}

const c = new ComponentA();

// 编译成ES5
var ComponentA = function () {
  this.property = "Proppy";
}

ComponentA.prototype.doStuff = function () {
  console.log("doStuff");
}

var c = new ComponentA();