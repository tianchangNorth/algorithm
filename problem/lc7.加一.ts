// 给定一个表示 大整数 的整数数组 digits，其中 digits[i] 是整数的第 i 位数字。这些数字按从左到右，从最高位到最低位排列。这个大整数不包含任何前导 0。
// 将大整数加 1，并返回结果的数字数组。

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。
// 加 1 后得到 123 + 1 = 124。
// 因此，结果应该是 [1,2,4]。


function plusOne(digits: number[]): number[] {
  let n = digits.length - 1
  digits[n] += 1
  while (digits[n] === 10) {
    digits[n] = 0
    digits[n - 1] ? digits[n - 1] += 1 : digits.unshift(1)
    n--
  }
  return digits
};

console.log(plusOne([9]));
