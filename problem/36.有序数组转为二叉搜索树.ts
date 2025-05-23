// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const build = function (nums: number[], l: number, r: number): TreeNode | null {
    if (l > r) return null;
    const mid = l + r >> 1;
    const ans = new TreeNode(nums[mid]);
    ans.left = build(nums, l, mid - 1);
    ans.right = build(nums, mid + 1, r);
    return ans;
  }
  return build(nums, 0, nums.length - 1);
};