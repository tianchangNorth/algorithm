function MyPow(x: number, n: number) {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let sum = 1
  while (n) {
    if (n & 1) sum *= x
    x *= x
    n >>>= 1
  }
  return sum
}
