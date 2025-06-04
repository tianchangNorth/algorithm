// 冒泡排序的过程，就是从第一个元素开始，重复比较相邻的两个项，若第一项比第二项更大，则交换两者的位置；反之不动。
// 每一轮操作，都会将这一轮中最大的元素放置到数组的末尾。假如数组的长度是 n，那么当我们重复完 n 轮的时候，整个数组就有序了。

const sortNum = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    let flag = false
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        flag = true;
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
    if (flag === false) return nums
  }
  return nums
}