// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

// 示例 1：
// 输入：nums = [1,2,3,1]
// 输出：true
// 解释：
// 元素 1 在下标 0 和 3 出现。

// 示例 2：
// 输入：nums = [1,2,3,4]
// 输出：false
// 解释：
// 所有元素都不同。

// 示例 3：
// 输入：nums = [1,1,1,3,3,4,3,2,4,2]
// 输出：true

function containsDuplicate(nums: number[]): boolean {
  const map: Record<number, number> = {}
  for (const num of nums) {
    if (map[num]) {
      return true
    }
    map[num] = 1
  }
  return false
};