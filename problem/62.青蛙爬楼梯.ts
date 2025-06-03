// 题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 2：
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。

// 1 阶 + 1 阶 + 1 阶
// 1 阶 + 2 阶
// 2 阶 + 1 阶

// 记忆化搜索来提效
// const f: number[] = []
// const climbStairs = (n: number): any => {
//   if (n === 1) return 1
//   if (n === 2) return 2
//   if (f[n] === undefined) return climbStairs(n - 1) + climbStairs(n - 2)
//   return f[n]
// }
// console.log(climbStairs(4));

// 动态规划

const climbStairs = function (n: number) {
  // 初始化状态数组
  const f = [];
  // 初始化已知值
  f[1] = 1;
  f[2] = 2;
  // 动态更新每一层楼梯对应的结果
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1];
  }
  // 返回目标值
  return f[n];
};