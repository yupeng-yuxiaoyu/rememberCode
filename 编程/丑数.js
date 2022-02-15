var nthUglyNumber = function(n) {
  // 每个丑数数组定义一个初始值
  const list2 = [2], list3 = [3], list5 = [5];
  const result = [1];
  for (let i = 1; i < n; i++) {
      // 暴力比较当前最小值
      const min = Math.min(...list2, ...list3, ...list5);
      // 加入新一轮的丑数
      list2.push(2 * min);
      list3.push(3 * min);
      list5.push(5 * min);
      result.push(min);
      // 已经用过的丑数，没有价值，会被抛弃
      if (min === list2[0]) {
          list2.shift();
      }
      if (min === list3[0]) {
          list3.shift();
      }
      if (min === list5[0]) {
          list5.shift();
      }
  }
  return result.splice(0, n);
};