// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

// 示例 1：
// 输入:a = "11", b = "1"
// 输出："100"

function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0 || carry) {
    const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const bitB = j >= 0 ? parseInt(b[j], 10) : 0;
    const sum = bitA + bitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }

  return result;
}


console.log(addBinary('11', "1"));