class Solutionss {
  constructor(public nums: number[]) {
  }

  reset(): number[] {
    return [...this.nums]
  }

  shuffle(): number[] {
    const result = [...this.nums]
    const n = result.length
    for (let i = 0; i < n; i++) {
      const j = i + Math.floor(Math.random() * (n - i));
      [result[i], result[j]] = [result[j], result[i]]
    }
    return result
  }
}

class Solution {
  private original: number[];

  constructor(public nums: number[]) {
    this.original = [...nums];
  }

  reset(): number[] {
    return [...this.original]; // 返回副本，避免外部修改
  }

  shuffle(): number[] {
    const result = [...this.original];
    const n = result.length;

    for (let i = 0; i < n; i++) {
      const j = i + Math.floor(Math.random() * (n - i));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }
}