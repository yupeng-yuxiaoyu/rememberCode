function request(method, url, isSync) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, isSync)
    xhr.onreadystatechange = function() {
      if(this.readyState !== 4) return
      if(this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.onerror = function() {
      reject(new Error(this.statusText))
    }
    // 设置响应的数据类型
    xhr.responseType = 'json'

    // 设置请求头信息
    xhr.setRequestHeader('Accept', 'application/json')

    xhr.send(null)
  })
  return promise
}