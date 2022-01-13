//传入中间件列表
function compose(middlewareList){
  //返回一个函数 接收ctx
  return function(ctx){
      //定义一个派发器，内部实现了next机制
      function dispatch(i){
          //获取当前中间件
          const fn = middlewareList[i]
          try{
              return Promise.resolve(
                  //通过i+1获取下一个中间件
                  fn(ctx,dispatch.bind(null,i+1))
              )
          }catch(err){
              return Promise.reject(err)
          }
      }
      //开始派发第一个中间件
      return dispatch(0)
  }
}