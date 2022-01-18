// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
// 示例 1:
// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
var maxProfit = function(prices) {
  let minprice = Number.MAX_VALUE;
  let maxprofit = 0;
  for (const price of prices) {
      maxprofit = Math.max(price - minprice, maxprofit);
      minprice = Math.min(price, minprice);
  }
  return maxprofit;
};

var maxProfit = function(prices) {
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
          const profit = prices[j] - prices[i];
          if (profit > maxprofit) {
              maxprofit = profit;
          }
      }
  }
  return maxprofit;
};
