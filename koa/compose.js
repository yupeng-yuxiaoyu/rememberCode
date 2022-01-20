//传入中间件列表
function compose(middleware) {
    // 递归函数
    function dispatch(index) {
        // 如果所有中间件都执行完跳出
        if (index === middleware.length) return;

        // 取出第 index 个中间件并执行
        const m = middleware[index];
        return m(() => dispatch(index + 1));
    }

    // 取出第一个中间件函数执行
    dispatch(0);
};
let middleware = []
middleware.push((next) => {
    console.log(1)
    next()
    console.log(1.1)
})
middleware.push((next) => {
    console.log(2)
    next()
    console.log(2.1)
})
compose(middleware)

/* 
app.compose = function() {
    // 自执行 async 函数返回 Promise
    return (async function () {
        // 定义默认的 next，最后一个中间件内执行的 next
        let next = async () => Promise.resolve();

        // middleware 为每一个中间件函数，oldNext 为每个中间件函数中的 next
        // 函数返回一个 async 作为新的 next，async 执行返回 Promise，解决异步问题
        function createNext(middleware, oldNext) {
            return async () => {
                await middleware(oldNext);
            }
        }

        // 反向遍历中间件数组，先把 next 传给最后一个中间件函数
        // 将新的中间件函数存入 next 变量
        // 调用下一个中间件函数，将新生成的 next 传入
        for (let i = app.middlewares.length - 1; i >= 0; i--) {
            next = createNext(app.middlewares[i], next);
        }

        await next();
    })();
}; */