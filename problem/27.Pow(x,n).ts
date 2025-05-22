function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;     // 处理负指数：x^-n = (1/x)^n
    n = -n;        // 转为正指数处理
  }

  let ans = 1;

  while (n) {
    if (n & 1) ans *= x; // 如果当前最低位是1，就乘上当前x
    x *= x;              // 每次循环，x翻倍（即 x^2, x^4, x^8...）
    n >>>= 1;            // 无符号右移1位，相当于 n = Math.floor(n / 2)
  }

  return ans;
}
