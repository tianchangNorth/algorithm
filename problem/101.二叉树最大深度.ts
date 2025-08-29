// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

function maxDepths(root: TreeNode | null): number {
  if (!root) return 0

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};