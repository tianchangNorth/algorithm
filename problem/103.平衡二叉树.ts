function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true

  if (Math.abs(help(root.left) - help(root.right)) > 1) {
    return false
  }

  return isBalanced(root.left) && isBalanced(root.right)
};

function help(root: TreeNode): number {
  if (!root) return 0

  return Math.max(help(root.left), help(root.right)) + 1
}