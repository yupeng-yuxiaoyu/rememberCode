/**
* @description: 数据类型的检测
* @param {any} data 要检测数据类型的变量
* @return {string} type 返回具体的类型名称【小写】
*/
function isTypeOf (data) {
  // return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, '$1').toLowerCase()
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}