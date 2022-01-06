if(typeof Object.assign2 !=='function') {
  // 注意1
  Object.defineProperty(Object, 'assign2', {
    value: function(target) {
      'use strict'
      if(target == null) { // 注意2
        throw new TypeError('Cannot convert null or undefined to object')
      }

      // 注意3
      const to = Object(target)

      for(let i = 1; i< arguments.length; i++) {
        const nextSource = arguments[i]
        if(nextSource != null) { // 注意2
          // 注意4
          for(const key in nextSource) {
            if(Object.prototype.hasOwnProperty.call(nextSource, key)) {
              to[key] = nextSource[key]
            }
          }
        }
      }
      return to
    },
    writable: true,
    configurable: true
  })
}