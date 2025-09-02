// n皇后问题
// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

// 示例 1：
// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。 

function solveNQueens(n: number): string[][] {
  const result: string[][] = [];

  // 用于记录冲突
  const cols = new Set<number>();           // 列
  const diagonals = new Set<number>();      // 主对角线 row - col
  const antiDiagonals = new Set<number>();  // 副对角线 row + col

  const path: number[] = []; // path[i] = j 表示第 i 行皇后在第 j 列

  function backtrack(row: number) {
    if (row === n) {
      // 找到一个解，把 path 转化为棋盘字符串
      result.push(generateBoard(path));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diagonals.has(row - col) || antiDiagonals.has(row + col)) {
        continue; // 冲突，跳过
      }

      // 放置皇后
      cols.add(col);
      diagonals.add(row - col);
      antiDiagonals.add(row + col);
      path.push(col);

      // 尝试下一行
      backtrack(row + 1);

      // 回溯
      cols.delete(col);
      diagonals.delete(row - col);
      antiDiagonals.delete(row + col);
      path.pop();
    }
  }

  function generateBoard(path: number[]): string[] {
    return path.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1));
  }

  backtrack(0); // 从第 0 行开始递归
  return result;
}

function bianli() {
  let list: number[] = []
  function help(n: number) {
    if (n === 0) return
    console.log(n);

    list.push(n)
    help(n - 1)
    console.log(list);
    list.pop()
  }

  help(5)

  return list
}

console.log(bianli());
