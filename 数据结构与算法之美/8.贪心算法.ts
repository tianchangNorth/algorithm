// 买卖股票最佳时机

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

function maxProfit(prices: number[]): number {
  let sum = 0
  for (let i = 1; i < prices.length; i++) {
    let count = prices[i] - prices[i - 1]
    if (count > 0) {
      sum += count
    }
  }

  return sum
}




