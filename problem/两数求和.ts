// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

// const addFunction = (nums: number[], target: number): number[] => {
//   const map = new Map<number, number>()

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]
//     if (map.has(complement)) {
//       return [map.get(complement)!, i]
//     }
//     map.set(nums[i], i)
//   }
//   return []
// }

function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const com = target - nums[i]
    if (map.has(com)) {
      return [i, map.get(com)]
    }
    map.set(nums[i], i)
  }
  return []
};