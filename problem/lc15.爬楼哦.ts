function climbStairslc(n: number): number {
  const fn: number[] = []
  fn[1] = 1
  fn[2] = 2

  for (let i = 3; i <= n; i++) {
    fn[i] = fn[i - 1] + fn[i - 2]
  }

  return fn[n]
};