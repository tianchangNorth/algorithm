// function maxSlidingWindow(nums: number[], k: number): number[] {
//   const stack: number[] = [], res: number[] = []
//   for (let i = 0; i < nums.length; i++) {
//     if (stack.length && stack[0] <= i - k) {
//       stack.shift()
//     }
//     while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
//       stack.pop()
//     }
//     stack.push(i)
//     if (i >= k - 1) {
//       res.push(nums[stack[0]])
//     }
//   }

//   return res
// };


function maxSlidingWindow(nums: number[], k: number): number[] {
  const stack: number[] = [], res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (stack.length && stack[0] <= i - k) {
      stack.shift()
    }

    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop()
    }

    stack.push()

    if (i >= k - 1) {
      res.push(nums[stack[0]])
    }
  }

  return res
};