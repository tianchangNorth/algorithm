// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

function maxProfitdp(prices: number[]): number {
  if (prices === null || prices.length === 0) return 0
  const dp: number[][] = Array.from({ length: prices.length }, () => Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }

  return dp[prices.length - 1][0]
};

function maxProfitdp2(prices: number[]): number {
  if (prices === null || prices.length === 0) return 0
  let hold = -prices[0], noHold = 0

  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, -prices[i])
    noHold = Math.max(hold + prices[i], noHold)
  }
  return noHold
};