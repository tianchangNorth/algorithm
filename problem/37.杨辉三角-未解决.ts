// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

function generate(numRows: number): number[][] {
  const triangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = new Array(i + 1).fill(1); // 初始化每行全是 1

    // 中间部分的值由状态转移公式计算
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row); // 添加到结果中
  }

  return triangle;
}