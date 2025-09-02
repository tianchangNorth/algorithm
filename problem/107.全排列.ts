// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]

function permutes(nums: number[]): number[][] {
  const used = new Set<number>()
  const res: number[] = []

  const result: number[][] = []

  function DFS(len: number) {
    if (len === nums.length) {
      result.push([...res])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used.has(nums[i])) {
        continue
      }

      res.push(nums[i])
      used.add(nums[i])

      DFS(len + 1)

      res.pop()
      used.delete(nums[i])
    }
  }

  DFS(0)

  return result
};


console.log(permutes([1, 2, 3, 4, 5]));
