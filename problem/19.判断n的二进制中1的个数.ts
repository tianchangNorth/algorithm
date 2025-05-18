const find1 = (n: number): number => {
  let count = 0
  while (n > 0) {
    n &= (n - 1) // === n = n&(n-1)  去除掉最后一位1
    count++
  }
  return count
}
const find1_2 = (n: number): number => {
  let count = 0
  while (n > 0) {
    if (n & 1) count++
    n >>= 1 // === n=n>>1
  }
  return count
}

console.log(find1(3));
console.log(find1_2(3));

// 补充当遇到负数时先进行去符号操作js中 >>> 0

// >>>	    无符号右移
// >>> 0	  转换为 32 位无符号整数（非负）
// 用途	    保证二进制操作中的一致性，尤其适合负数处理
