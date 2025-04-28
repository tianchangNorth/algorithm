// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

 

// 示例 1：

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// 示例 2：

// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 

// 提示：

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

function canJump(nums: number[]): boolean {
  const n = nums.length
  let maxJump = 0
  for(let i = 0; i < n-1; i++) {
    if(i > maxJump){
      return false
    }
    (nums[i]+i)>maxJump && (maxJump = nums[i] + i)    
  }
  if(maxJump >= n - 1) {
    return true
  }
  return false
};

canJump([1,0,1,0])

var canJump1 = function (nums: number[]) {
  // 长度为 1 直接就是终点
  if (nums.length === 1) return true;

  // 能覆盖的最远距离
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
      // 当前覆盖距离 cover 和当前位置加能跳跃的距离中取一个较大者
      cover = Math.max(cover, i + nums[i]);
      console.log(cover);
      // 覆盖距离超过或等于 nums.length - 1 说明能到达终点
      if (cover >= nums.length - 1) return true;
  }

  // 循环完成之后，还没返回 true 就是不能达到终点
  return false;
};

console.log(canJump1([1,0,1,0]));
