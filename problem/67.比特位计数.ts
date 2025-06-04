// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。

// 示例 1：

// 输入：n = 2
// 输出：[0, 1, 1]
// 解释：
// 0 -- > 0
// 1 -- > 1
// 2 -- > 10

// 状态转移方程 F(n & n-1) + 1

function countBits(n: number): number[] {
  if (n === 0) return [0]
  const list = [0, 1]
  for (let i = 2; i <= n; i++) {
    list[i] = list[i & (i - 1)] + 1
  }
  return list
};

console.log(countBits(5));
