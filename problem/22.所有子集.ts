// 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

// 示例: 输入: nums = [1,2,3]
// 输出:
// [
// [3],
// [1],
// [2],
// [1,2,3],
// [1,3],
// [2,3],
// [1,2],
// []
// ]

// root                                            []
// 数字1——第一层                     1                                   []
// 数字2——第二层            [1,2]            [1]                   [2]         []
// 数字3———第三层    [1,2,3]     [1,2]  [1,3]   [1]           [2,3]   [2]   [3]  []

const subsets = (nums: any[]): [] => {
  const res: any = []
  const len = nums.length
  const curr: any = []
  const dfs = (index: number) => {
    res.push([...curr])
    for (let i = index; i < len; i++) {
      curr.push(nums[i])
      dfs(i + 1)
      curr.pop()
    }
  }
  dfs(0)
  return res
}

console.log(subsets([1, 2, 3]));

const recursive = (a: number) => {
  console.log(a);
  a += 1
  if (a > 2) return;
  recursive(a)
  console.log('go');
}


console.log(recursive(1));

