const arr = []
const ARRAY_METHOD = [
	'push',
	'pop',
	'shift',
	'unshift',
	'reverse',
	'sort',
	'splice'
]
let arr_methods = Object.create(Array.prototype)

ARRAY_METHOD.forEach(method=>{
	arr_methods[method] = function(){
		// 拦截的函数
		console.log(`调用${method}方法`)	
		return Array.prototype[method].apply(this, arguments)
	}
})
arr.__proto__ = arr_methods

arr.push(1);