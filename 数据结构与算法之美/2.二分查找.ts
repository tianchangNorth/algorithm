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


function sqrtBinarySearch(x) {
  if (x < 0) throw new Error("负数没有实数平方根");
  if (x === 0 || x === 1) return x.toFixed(6);

  let left = 0;
  let right = x < 1 ? 1 : x;
  let mid;

  const eps = 1e-7; // 精度阈值

  while (right - left > eps) {
    mid = (left + right) / 2;
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return ((left + right) / 2).toFixed(6);
}

//二分查找变形1  查找符合要求的第一个数字

const bsearch2 = (nums: number[], num: number): number => {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] > num) {
      r = mid - 1
    } else if (nums[mid] < num) {
      l = mid + 1
    } else {
      if (mid === 0 || nums[mid - 1] !== num) return mid
      r = mid - 1
    }
  }
  return -1
}

// 查找第一个大于等于给定值的元素

const bsearch3 = (nums: number[], num: number): number => {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= num) {
      if (mid === 0 || nums[mid - 1] < num) return mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}
