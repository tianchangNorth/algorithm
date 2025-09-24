function reverse(x: number): number {
  let res: number = 0
  while (x !== 0) {
    const t: number = x % 10
    const newRes: number = res * 10 + t
    if ((newRes - t) / 10 !== res) return 0
    res = newRes
    x = x / 10 | 0
  }

  return res
};