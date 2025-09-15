// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 示例 1:
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]

// 示例 2:
// 输入：nums = [-1,-100,3,99], k = 2
// 输出：[3,99,-1,-100]
// 解释:
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]


// function rotate(nums: number[], k: number): void {
//   k = k % nums.length
//   const rotated = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k))
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = rotated[i] // 把结果写回原数组
//   }

// };

function rotate(nums: number[], k: number): void {
  k %= nums.length

  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)

  function reverse(arr: number[], start: number, end: number) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
}


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
