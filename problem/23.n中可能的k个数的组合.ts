// 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 示例: 输入: n = 4, k = 2
// 输出:
// [
// [2,4],
// [3,4],
// [2,3],
// [1,2],
// [1,3],
// [1,4],
// ]

const combine = (n: number, k: number): [] => {
  const res: any = []
  const curr: any = []
  const dfs = (index: number) => {
    if (curr.length === k) {
      res.push([...curr])
    }

    for (let i = index; i <= n; i++) {
      curr.push(i)
      dfs(i + 1)
      curr.pop(i)
    }
  }
  dfs(1)
  return res
}

console.log(combine(4, 2));
