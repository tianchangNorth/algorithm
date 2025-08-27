// 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。

// 如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。

// 输入：n = 1
// 输出：true
// 解释：20 = 1

function isPowerOfTwo(n: number): boolean {
  if (n === 1) return true
  if (n <= 0) return false
  if (n % 2 !== 0) return false
  return isPowerOfTwo(n / 2)
};

function isPowerOfTwo1(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
};

function isPowerOfThree(n: number): boolean {
  return n > 0 && 1162261467 % n == 0;
}

console.log(isPowerOfTwo(3));
