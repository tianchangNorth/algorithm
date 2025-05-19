// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

// 示例：
// 输入: [1,2,3]
// 输出: [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]

const nums21 = [1, 2, 3]

const permute = (nums: Number[]): Object[] => {
  const len = nums.length
  const curr: Number[] = []
  const res: Object[] = []
  const visited = new Map()
  const dfs = (nth: number) => {
    // 若遍历到了不存在的坑位（第 len+1 个），则触碰递归边界返回
    if (nth === len) {
      // 此时前 len 个坑位已经填满，将对应的排列记录下来
      console.log(curr);
      res.push(curr)
      return
    }
    for (let i = 0; i < len; i++) {
      // 若 nums[i] 之前没被其它坑位用过，则可以理解为“这个数字剩下了”
      if (!visited.get(nums[i])) {
        // 给 nums[i] 打个“已用过”的标
        visited.set(nums[i], 1)
        // 将nums[i]推入当前排列
        curr.push(nums[i])
        // 基于这个排列继续往下一个坑走去
        dfs(nth + 1)
        // nums[i]让出当前坑位
        curr.pop()
        // 下掉“已用过”标识
        visited.set(nums[i], 0)
      }
    }
  }
  dfs(0)
  return res
}


console.log(permute(nums21));
