// 泰波那契序列 Tn 定义如下：
// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

// 示例 1：
// 输入：n = 4
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

function tribonacci(n: number): number {
  const f = [0, 1, 1]
  for (let i = 0; i <= n - 3; i++) {
    f[i + 3] = f[i] + f[i + 1] + f[i + 2]
  }
  return f[n]
};

console.log(tribonacci(4));
