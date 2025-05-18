// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例: 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

const maxList = (nums: number[], k: number): number[] => {
  let l = 0, r = k, res = []
  while (r <= nums.length) {
    let i = l, max = nums[l]
    while (i < r) {
      max = Math.max(nums[i], max)
      i++
    }
    res.push(max)
    l++
    r++
  }
  return res
}

console.log(maxList([1, 3, -1, -3, 5, 3, 6, 7], 3));

const maxList2 = (nums: number[], k: number): number[] => {
  const res = []
  const deque: any[] = []
  for (let i = 0; i < nums.length; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    deque.push(i);

    while (deque.length && deque[0] <= i - k) {
      // 将队头元素索引出队
      deque.shift();
    }

    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }

  return res
}

console.log(maxList2([1, 3, -1, -3, 5, 3, 6, 7], 3));

