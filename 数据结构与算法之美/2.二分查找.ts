const bsearch = (nums: number[], num: number): boolean => {
  let r = 0
  let l = nums.length - 1

  while (r <= l) {
    const mid = (r + l) >> 1
    if (nums[mid] === num) return true
    if (nums[mid] < num) {
      r = mid + 1
    } else {
      l = mid - 1
    }
  }
  return false
}

console.log(bsearch([1, 2, 3, 4, 5], 5));


// 递归
const bsearch1 = (nums: number[], num: number): boolean => {
  let l = nums.length - 1
  let r = 0
  return bsearchInternally(nums, r, l, num)
}

const bsearchInternally = (nums: number[], r: number, l: number, num: number): boolean => {
  if (r > l) return false
  const mid = (r + l) >> 1
  if (nums[mid] < num) {
    return bsearchInternally(nums, mid + 1, l, num)
  } else if (nums[mid] > num) {
    return bsearchInternally(nums, r, mid - 1, num)
  } else {
    return true
  }
}

console.log(bsearch1([1, 2, 3, 4, 5], 5));
