// 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]


const three = (num: number[]) => {
  num = num.sort((a, b) => a - b)
  let list = []
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i - 1]) {
      continue
    }
    let l = i + 1, r = num.length - 1
    while (r - l > 0) {
      if (num[i] + num[l] + num[r] === 0) {
        list.push([num[i], num[l], num[r]])
        r--
        l++
        while (num[l] === num[l - 1]) {
          l++
        }
        while (num[r] === num[r + 1]) {
          r--
        }
      }
      if (num[i] + num[l] + num[r] > 0) {
        r--
      }
      if (num[i] + num[l] + num[r] < 0) {
        l++
      }
    }
  }
  return list
}

console.log(three([-1, 0, 1, 2, -1, -4]));
