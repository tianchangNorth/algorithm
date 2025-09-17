// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
// 你可以按任意顺序返回答案。

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

function twoSum(nums: number[], target: number): number[] {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i]

    if (map.has(num)) {
      return [map.get(num), i]
    }

    map.set(nums[i], i)
  }
  return []
};

console.log(twoSum([2, 7, 11, 15], 26));



