// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]

// 示例 2:
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
//双指针
function intersect(nums1: number[], nums2: number[]): number[] {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  let j = 0, k = 0, res = []
  while (nums1[j] !== undefined && nums2[k] !== undefined) {
    if (nums1[j] === nums2[k]) {
      res.push(nums1[j])
      j++
      k++
    } else if (nums1[j] > nums2[k]) {
      k++
    } else {
      j++
    }
  }
  return res
};
//哈希表
// function intersect(nums1: number[], nums2: number[]): number[] {
//     if (nums1.length > nums2.length) {
//         return intersect(nums2, nums1);
//     }

//     const map = new Map<number, number>();
//     for (const num of nums1) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }

//     const intersection: number[] = [];
//     for (const num of nums2) {
//         if (map.has(num) && map.get(num)! > 0) {
//             intersection.push(num);
//             map.set(num, map.get(num)! - 1);
//         }
//     }

//     return intersection;
// }


console.log(intersect([4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6, 2, 2, 4]));
