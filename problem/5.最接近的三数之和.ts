// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)。
// 示例 2：

// 输入：nums = [0,0,0], target = 1
// 输出：0
// 解释：与 target 最接近的和是 0（0 + 0 + 0 = 0）。

// 提示：

// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);
  let sum = nums[0] + nums[1] + nums[2], ans = 0;
  for (let i = 1; i < nums.length - 2; i++) {
    let l = 1, r = nums.length - 1
    const size = target - nums[i];
    while (r > l) {
      if (nums[l] + nums[r] > size) {
        r--;
      }
      else if (nums[l] + nums[r] < size) {
        l++;
      }
      else {
        return target;
      }
    }
    if (Math.abs(nums[i] + nums[l] + nums[r] - target) < Math.abs(target - sum)) {
      sum = nums[i] + nums[l] + nums[r];
      ans = sum;
    }
  }

  return sum
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));