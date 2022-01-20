// 防抖函数 在事件被触发n秒后再执⾏回调，如果在这n秒内⼜被触发，则重新计时。
function debounce(fn, wait = 50) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  }
}
// 节流函数 规定在⼀个单位时间内，只能触发⼀次函数。如果这个单位时间内触发多次函数，只有⼀次⽣效。
const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
}
// 第一次不执行
const throttle = (fn, delay = 500) => {
  let flag = true;
  let index = 0;
  return (...args) => {
    if (index > 0) {
      if (!flag) return;
      flag = false;
      setTimeout(() => {
        fn.apply(this, args);
        flag = true;
      }, delay);
    } else {
      index++;
    }
  };
}
// 自执行版
function debounce(fn, wait = 1000, immediate = false) {
  let timer = null

  function debounced(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    // immedidate为true表示第一次触发成功
    if (immediate && !timer) {
      fn.apply(this, args)
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
  debounced.cancel = function () {
    clearTimeout(timer)
    timer = null
  }
  return debounced
}

function throttle(fn, wait = 1000, immediate = false) {
  let previous = 0

  function throttled(...args) {
    let now = +new Date()
    if (immediate) {
      fn.apply(this, args)
      previous = now
      return
    }
    if (now - previous > wait) {
      previous = now
      fn.apply(this, args)
    }
  }
  return throttled;
}