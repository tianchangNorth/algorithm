// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

// 示例 1：
// 输入：nums = [3,0,1]
// 输出：2
// 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。

// 示例 2：
// 输入：nums = [0,1]
// 输出：2
// 解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。

// 示例 3：
// 输入：nums = [9,6,4,2,3,5,7,0,1]
// 输出：8
// 解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。

// function missingNumber(nums: number[]): number {
//   const len = nums.length;
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < len; i++) {
//     if (nums[i] !== i) {
//       return i;
//     }
//   }
//   return len;
// };

function missingNumber(nums: number[]): number {
  const len = nums.length;
  let sum = 0, target = 0
  for (let i = 0; i <= len; i++) {
    sum += i
  }
  for (let i = 0; i < nums.length; i++) {
    target += nums[i]
  }
  return sum - target
};

console.log(missingNumber([3, 0, 1])) // 2;
