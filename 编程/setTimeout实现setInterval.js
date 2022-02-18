let timer = null;
function interval(func, delay){
    let interFunc = function(){
        func.call(null);
        timer = setTimeout(interFunc, delay) // 递归调用
    }
    timer = setTimeout(interFunc, delay) // 触发递归
}
// 调用
interval(() => console.log("long"), 1000)
// 清除定时器
window.clearTimeout(timer)
