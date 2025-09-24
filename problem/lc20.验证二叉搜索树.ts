function isValidBST(root: TreeNode | null): boolean {
  const help = (root: TreeNode | null, min: number, max: number): boolean => {
    if (root === null) return true
    if (root.val >= max || root.val <= min) {
      return false
    }

    return help(root.left, min, root.val) && help(root.right, root.val, max)
  }

  return help(root, -Infinity, +Infinity)
};