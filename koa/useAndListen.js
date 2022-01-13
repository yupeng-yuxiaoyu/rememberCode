class koaMiddleWare {
  constructor() {
    this.middlewareList = []
  }

  //use方法
  use(fn) {
    this.middlewareList.push(fn)
    return this
  }

  //整合req,res
  createContext(req, res) {
    //此处只做简单的模拟
    return ctx = {
      req,
      res
    }
  }

  //生成http.createServe所需的回调函数
  callback() {
    return (req, res) => {
      const ctx = this.createContext(req, res)
    }
  }
  listen(...args) {
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }
}