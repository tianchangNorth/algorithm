function solveNQueens(n: number): string[][] {
  const res: string[][] = []
  const mask = (1 << n) - 1
  const path: number[] = [] // 每一行皇后的位置（二进制）

  function dfs(cols: number, diags1: number, diags2: number) {
    if (cols === mask) {
      // 把 path 转成棋盘
      res.push(
        path.map(p => {
          const row = Array(n).fill('.')
          row[Math.log2(p)] = 'Q'
          return row.join('')
        })
      )
      return
    }

    let available = ~(cols | diags1 | diags2) & mask

    while (available) {
      const p = available & -available
      available &= available - 1

      path.push(p) // 选择
      dfs(cols | p, (diags1 | p) << 1, (diags2 | p) >> 1)
      path.pop()   // 撤销选择
    }
  }

  dfs(0, 0, 0)
  return res
}

console.log(solveNQueens(5))
/*
输出：
[
  [".Q..","...Q","Q...","..Q."],
  ["..Q.","Q...","...Q",".Q.."]
]
*/
