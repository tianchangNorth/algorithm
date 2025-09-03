// 37. 解数独
// 困难
// 相关标签
// premium lock icon
// 相关企业
// 编写一个程序，通过填充空格来解决数独问题。

// 数独的解法需 遵循如下规则：

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

function solveSudoku(board: string[][]): string[][] {
  // 三个约束数组：行、列、九宫格
  const row: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));
  const col: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));
  const box: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));

  // 初始化，把已有数字填到约束表里
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const ch = board[i][j];
      if (ch !== ".") {
        const num = Number(ch) - 1; // 0~8
        row[i][num] = true;
        col[j][num] = true;
        const k = Math.floor(i / 3) * 3 + Math.floor(j / 3); // 3x3 小宫格索引
        box[k][num] = true;
      }
    }
  }

  function dfs(i: number, j: number): boolean {
    if (i === 9) return true; // 填满了
    if (j === 9) return dfs(i + 1, 0); // 换行
    if (board[i][j] !== ".") return dfs(i, j + 1); // 跳过已填的格子

    const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    for (let num = 0; num < 9; num++) {
      if (!row[i][num] && !col[j][num] && !box[k][num]) {
        // 试填
        board[i][j] = (num + 1).toString();
        row[i][num] = col[j][num] = box[k][num] = true;

        if (dfs(i, j + 1)) return true; // 成功继续

        // 回溯
        board[i][j] = ".";
        row[i][num] = col[j][num] = box[k][num] = false;
      }
    }
    return false; // 无解
  }

  dfs(0, 0);
  return board
}

console.log(solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));
