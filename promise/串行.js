const arr = ['url1', 'url2', 'url3']
function request(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(url)
            resolve()
        }, 1000)
    })
}

// 解决方案1
function chainRequest(arr) {
    return arr.reduce((t, v) => {
        return t.then(() => {
            return request(v)
        })
    }, Promise.resolve())
}

// 解决方案2
async function chainRequest2(arr) {
  for(const v of arr){
    await request(v)
  }  
}