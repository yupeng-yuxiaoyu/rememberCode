
// 寄生组合继承
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'green', 'blue']
}
SuperType.prototype.sayName = function() {
  return this.name
}
function SubType(name, age){
  SuperType.call(this, name)
  this.age = age
}
SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype.constructor = SubType

SubType.prototype.sayAge = function() {
  return this.age
}

// ES6继承

class SuperType {
  constructor(name) {
    this.name = name
    this.color = ['red', 'green', 'blue']
  }
  sayName() {
    return this.name
  }
}
class SubType extends SuperType {
  constructor(name, age){
    super(name)
    this.age = age
  }
  sayAge() {
    return this.age
  }
}
// 1. 原型链继承
// function Animal() {
//   this.superValue = 'animal'
//   this.colors = ['red', 'green', 'blue']
// }
// Animal.prototype.getSupervalue = function() {
//   console.log(this.superValue)
// }
// function Cat() {
//   this.subValue = 'cat'
// }
// Cat.prototype = new Animal()
// Cat.prototype.getSubValue = function() {
//   console.log(this.subValue)
// }
// const cat1 = new Cat('doudou')
// cat1.getSupervalue()
// cat1.colors.push('black')
// console.log(cat1.colors)
// const cat2 = new Cat('dabai')
// console.log(cat2.colors)
// 2. 借用构造函数继承
// function Animal(name) {
//   this.name = name
//   this.colors = ['red', 'green', 'blue']
// }
// Animal.prototype.getName = function() {
//   console.log(this.colors)
// }
// function Cat(name) {
//   Animal.call(this, name)
// }

// const cat1 = new Cat('doudou')
// cat1.colors.push('black')
// console.log(cat1.colors)
// const cat2 = new Cat('dabai')
// console.log(cat2.colors)
// 3. 组合继承
// function Animal(name) {
//   this.name = name
//   this.colors = ['red', 'green', 'blue']
// }
// Animal.prototype.sayName = function() {
//   return this.name
// }
// function Cat(name, age) {
//   Animal.call(this, name)
//   this.age = age
// }

// Cat.prototype = new Animal()
// Cat.prototype.constructor = Cat
// Cat.prototype.syAge = function() {
//   return this.age
// }
