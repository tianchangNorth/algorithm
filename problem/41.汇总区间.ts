// 给定一个  无重复元素 的 有序 整数数组 nums 。
// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

// "a->b" ，如果 a != b
// "a" ，如果 a == b

function summaryRanges(nums: number[]): string[] {
  const result: string[] = []
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i]
    while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
      i++
    }
    const end = nums[i]
    result.push(start === end ? `${start}` : `${start}->${end}`)
  }
  return result
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])) // ["0->2", "4->5", "7"];
