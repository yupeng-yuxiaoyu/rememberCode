async function sleep(wait) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, wait);
  });
}
function repeat(func, times, wait) {
  return async function () {
    for (let i = 0; i < times; i++) {
      await sleep(wait);
      func(arguments);
    }
  };
}
var repeatFunc = repeat(alert, 4, 3000);
repeatFunc('helloworld');