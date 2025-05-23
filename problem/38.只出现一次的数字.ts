// 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。


// function singleNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b)
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
//       return nums[i]
//     }
//   }
//   return nums[0]
// };

function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b, 0)
}

