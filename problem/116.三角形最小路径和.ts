// 给定一个三角形 triangle ，找出自顶向下的最小路径和。
// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

// 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 输出：11
// 解释：如下面简图所示：
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

// function minimumTotal(triangle: number[][]): number {
//   const m = triangle.length
//   const n = triangle[triangle.length - 1].length
//   const dp = Array.from({ length: m }, () => Array(n).fill(0))

//   for (let i = 0; i < n; i++) {
//     dp[m - 1][i] = triangle[m - 1][i]
//   }

//   for (let i = m - 2; i >= 0; i--) {
//     for (let j = 0; j < triangle[i].length; j++) {
//       dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
//     }
//   }
//   // console.log(dp);
//   // console.log(dp[0][0]);

//   return dp[0][0]
// };


function minimumTotal(triangle: number[][]): number {
  const m = triangle.length
  const dp = [...triangle[m - 1]]  // 初始化为最后一行

  for (let i = m - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }

  return dp[0]
}

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])