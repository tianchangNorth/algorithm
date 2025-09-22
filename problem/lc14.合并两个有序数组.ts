function merges(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1, j = n - 1, k = m + n - 1
  while (j >= 0 && i >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[i--]
  }
  console.log(nums1);
};

merges([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

