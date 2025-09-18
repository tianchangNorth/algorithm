// 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）

function isValidSudoku(board: string[][]): boolean {
  const row: boolean[][] = Array.from({ length: 9 }, () => new Array(9).fill(false))
  const col: boolean[][] = Array.from({ length: 9 }, () => new Array(9).fill(false))
  const sub: boolean[][] = Array.from({ length: 9 }, () => new Array(9).fill(false))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j].charCodeAt(0) - '1'.charCodeAt(0);
      if (num > 8 || num < 0) continue
      const subValid = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (row[i][num] || col[j][num] || sub[subValid][num]) {
        return false
      }

      row[i][num] = true
      col[j][num] = true
      sub[subValid][num] = true
    }
  }
  return true
};