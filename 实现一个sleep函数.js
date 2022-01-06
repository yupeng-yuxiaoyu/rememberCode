// Promise版本
const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}

function sleep2(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}


sleep(1000).then(() => {
  console.log(1)
})

sleep2(3000).then(() => console.log('runs after 3 seconds'));


// async版本
async function sleepAsync() {
  console.log('start')
  await sleep(1000)
  console.log('end')
}
sleepAsync()


// ES5版本
function sleep(callback, time) {
  if(typeof callback === 'function') {
    setTimeout(callback, time)
  }
}

function output() {
  console.log(1)
}
sleep(output, 1000)
