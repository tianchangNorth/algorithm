// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。


// function intersect(nums1: number[], nums2: number[]): number[] {
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   console.log(nums1, nums2);

//   let res = [], l1 = 0, l2 = 0

//   while (l1 < nums1.length && l2 < nums2.length) {
//     if (nums1[l1] === nums2[l2]) {
//       res.push(nums1[l1])
//       l1++
//       l2++
//     } else {
//       nums1[l1] > nums2[l2] ? l2++ : l1++
//     }
//   }

//   return res
// };


function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>()
  const res: number[] = []

  // 统计 nums1 中每个数字的出现次数
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // 遍历 nums2，查找公共元素
  for (const num of nums2) {
    if (map.get(num) && map.get(num)! > 0) {
      res.push(num)
      map.set(num, map.get(num)! - 1) // 用掉一次
    }
  }

  return res
}


console.log(intersect([4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6]));
