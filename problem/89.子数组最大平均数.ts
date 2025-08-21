// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

// 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

// 任何误差小于 10-5 的答案都将被视为正确答案。

// 示例 1：
// 输入：nums = [1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

// 示例 2：
// 输入：nums = [5], k = 1
// 输出：5.00000

// function findMaxAverage(nums: number[], k: number): number {
//   let stack: number[] = [], res: number = 0, reslist = []

//   for (let i = 0; i < nums.length; i++) {
//     if (stack.length && stack[0] <= i - k) {
//       res -= nums[stack[0]]
//       stack.shift()
//     }
//     stack.push(i)
//     res += nums[i]
//     if (i >= k - 1) {
//       reslist.push(res)
//     }
//   }

//   return Math.max(...reslist) / k
// };



function findMaxAverage(nums: number[], k: number): number {
  let res = 0, max = -Infinity
  for (let i = 0; i < k; i++) {
    res += nums[i]
  }

  max = res

  for (let i = k; i < nums.length; i++) {
    res -= nums[i - k]
    res += nums[i]
    max = Math.max(res, max)
  }
  return max / k
};


console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
