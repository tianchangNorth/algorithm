function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x
  let l = -1, r = x, m = 0
  while (l + 1 !== r) {
    m = Math.floor((l + r) / 2)
    if (m * m > x) {
      r = m
    } else {
      l = m
    }
  }
  return l
};

console.log(mySqrt(100));
