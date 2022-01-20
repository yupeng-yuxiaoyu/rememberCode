// function* foo() {
//   yield 'result1'
//   yield 'result2'
//   yield 'result3'
// }
  
// const gen = foo()
var context = {
  next: 0,
  prev: 0,
  done: false,
  // 新增代码
  stop: function stop() {
    this.done = true
  }
}


function gen$(context) {
  while (1) {
    switch (context.prev = context.next) {
      case 0:
        context.next = 2;
        return 'result1';

      case 2:
        context.next = 4;
        return 'result2';

      case 4:
        context.next = 6;
        return 'result3';

      case 6:
        // 新增代码
        context.stop();
        return undefined
    }
  }
}

let foo = function () {
  return {
    next: function () {
      value = gen$(context);
      done = context.done
      return {
        value,
        done
      }
    }
  }
}
const res = foo();

console.log('res.next() :>> ', res.next());
console.log('res.next() :>> ', res.next());
console.log('res.next() :>> ', res.next());
console.log('res.next() :>> ', res.next());
