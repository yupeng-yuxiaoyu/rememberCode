// 浅拷贝
function shallowClone(source) {
  const target = {}
  for(const key in source) {
    if(source.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
  return target
}

function isObject(obj) {
  return typeof obj === 'object' && obj != null
}

// 简单深拷贝 -- 无法解决循环引用问题以及拷贝 Symbol
function simpleDeepClone(source) {
  if (!isObject(source)) return source; // 非对象返回自身
  const target = Array.isArray(source) ? [] : {};
  for(const key in source) {
    if(source.hasOwnProperty(key)) {
      if(typeof source[key] === 'object') {
        target[key] = simpleDeepClone(sourrce[key])
      } else {
        target[key] = source[key]
      }
    }
  }
}


// 深拷贝
// 使用哈希表解决循环引用问题，循环检测，我们设置一个数组或者哈希表存储已拷贝过的对象，当检测到当前对象已存在于哈希表中时，取出该值并返回即可
// 使用Reflect.ownKeys() 获取所有的键值，同时包括 Symbol，对source遍历赋值即可
function deepClone(source, hash = new WeakMap()) {
  if(!isObject(source)) return source
  if(hash.has(source)) return hash.get(source) // 新增代码，查哈希表

  const target = Array.isArray(source)? [] : {}
  hash.set(source, target) // 新增代码，哈希表设值
  // 使用Reflect.ownKeys() 获取所有的键值，同时包括 Symbol
  Reflect.ownKeys(source).forEach((key) => {
    if(isObject(source[key])) {
      target[key] = deepClone(source[key], hash)
    } else {
      target[key] = source[key]
    }
  })
  return target
}