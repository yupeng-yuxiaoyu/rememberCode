/**
 * 处理一个数组，使其支持性array[-1]的访问
 * @param {Array} array
 * @return {Array} new array
 */
 function proxy(array) {
  return new Proxy(array, {
    get(target, key) {
      if(key < 0) {
        let index = array.length + Number(key)
        return  Reflect.get(target, index)
      }
      return  Reflect.get(target, key)
    }
  })
}

const array = proxy([1, 2, 3]);
console.log(array[-1]); // out 3
console.log(array[-2]); // out 2
console.log(array[-3]); // out 1