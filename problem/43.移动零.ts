// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 示例 1:
// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 示例 2:
// 输入: nums = [0]
// 输出: [0]

// n方
// function moveZeroes(nums: number[]): void {
//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       nums.push(0)
//       i--; // 重新检查当前位置
//       len--; // 数组长度减少
//     }
//   }
// };


// n
function moveZeroes(nums: number[]): void {
  let r = 0, l = 0, len = nums.length
  while (r < len) {
    if (nums[r]) {
      const temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
      l++
    }
    r++
  }
};

console.log(moveZeroes([0, 0, 1])) // [1, 3, 12, 0, 0];
