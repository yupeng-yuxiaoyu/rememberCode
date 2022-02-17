var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return {
            value: this.i++,
            done: false
          };
        }
        return {
          value: undefined,
          done: true
        };
      }
    };
  }
};
for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
let range = {
  from: 1,
  to: 5,
  // [Symbol.iterator]: function() {
  //   return {
  //     i: this.from
  //     next: function() {
  //       if(i <= this.to) {
  //         return { done: false, value: i ++}
  //       } else {
  //         return { done: true, value: undefined}
  //       }
  //     }
  //   }    
  // }
};