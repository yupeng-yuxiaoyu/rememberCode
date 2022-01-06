function iteratorGenerator(list) {
  var idx = 0
  var len = list.length
  return {
    next: function() {
      var done = idx >= len
      var value = !done? list[idx++] : undefined
      return {
        done: done,
        value: value
      }
    }
  }
}