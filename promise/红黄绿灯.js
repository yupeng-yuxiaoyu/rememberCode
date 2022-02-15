const red = () => console.log('red')
const green = () => console.log('green')
const yellow = () => console.log('yellow')

const controlLight = color => time => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      color()
      resolve()
    }, time)
  })
)

const controlOrder = async () => {
  await controlLight(red)(3000)
  await controlLight(green)(1000)
  await controlLight(yellow)(2000)
  await controlOrder()
}

controlOrder()