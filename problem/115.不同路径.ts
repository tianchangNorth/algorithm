// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？

// 示例
// 输入：m = 3, n = 2
// 输出：3
// 解释：
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向下

// function uniquePaths(m: number, n: number): number {
//   function help(col: number, row: number): number {
//     if (!isValid(col, row)) return 0
//     if (col === m && row === n) return 1
//     return help(col + 1, row) + help(col, row + 1)
//   }

//   function isValid(col: number, row: number): boolean {
//     return col <= m && row <= n
//   }

//   return help(1, 1)
// };

function uniquePaths(m: number, n: number): number {
  const dp = Array.from({ length: m }, () => Array(n).fill(1))
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
};

// 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m - 1][n - 1]）。机器人每次只能向下或者向右移动一步。
// 网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。
// 返回机器人能够到达右下角的不同路径数量。
// 测试用例保证答案小于等于 2 * 109。

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length]
  const dp = Array.from({ length: m }, () => Array(n).fill(0))

  // 起点
  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1

  // 初始化第一列
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0]
  }

  // 初始化第一行
  for (let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 1 ? 0 : dp[0][j - 1]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[m - 1][n - 1]
};

// 爬楼梯问题
function ClimbStairs(n: number): number {
  const f: number[] = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }

  return f[n]
}

console.log(ClimbStairs(4));



console.log(uniquePaths(3, 2));

