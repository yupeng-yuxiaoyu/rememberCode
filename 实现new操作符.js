// 写法一
function create () {
  // 创建一个空的对象obj
  const obj = new Object();
  // 获得构造函数，arguments中去除第一个参数
  const Con = [].shift.call(arguments);
  // 将新对象的__proto__指向构造函数的 prototype 对象
  obj.__proto__ = Con.prototype;
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  const ret = Con.apply(obj, arguments);
  // 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
};

// 写法二
function create2() {
  const obj = new Object();
  const Con = [...arguments].shift();
  const args = [...arguments].slice(1);
  obj.__proto__ = Con.prototype;
  const ret = Con.apply(obj, args)
  return ret instanceof Object? ret : obj;
}

// 写法三
function create(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object? result : obj;
}

function Animal(name, age) {
  this.name = name;
  this.age = age
}

const doudou = create(Animal, 'doudou', 3)
console.log(doudou.name)
console.log(doudou.age)

// const doudou2 = new Person('doudou2', 3)


