// 斐波那契数列
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


function fib(n: number): number {
  if (n < 2) return n
  let [a, b] = [0, 1]
  let c = 0
  const mod = 1000000007
  for (let i = 2; i <= n; i++) {
    c = (a + b) % mod
    a = b
    b = c
  }
  return c
};

console.log(fib(2));

