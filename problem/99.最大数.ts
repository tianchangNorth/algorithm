// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

// 示例 1：
// 输入：nums = [10,2]
// 输出："210"

// 示例 2：
// 输入：nums = [3,30,34,5,9]
// 输出："9534330"

function largestNumber(nums: number[]): string {
  for (let i = 0; i < nums.length; i++) {
    let flag = false
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j].toString() + nums[j + 1].toString() < nums[j + 1].toString() + nums[j].toString()) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        flag = true
      }
    }
    if (flag === false) break
  }
  const str = nums.reduce((a, b) => a + b, '')
  return str[0] === '0' ? '0' : str
}

function largestNumber1(nums: number[]): string {
  const str = nums.map(item => item.toString())
  str.sort((a, b) => {
    const item1 = a + b
    const item2 = b + a
    if (item1 > item2) return -1
    if (item1 < item2) return 1
    return 0
  })

  const result = str.join('')
  return result[0] === '0' ? '0' : result
}



console.log(largestNumber([3, 30, 34, 5, 9]));

