// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) return null
  if (root === p || root === q) return root

  const right = lowestCommonAncestor(root.right, p, q)
  const left = lowestCommonAncestor(root.left, p, q)
  if (left === null) return right
  if (right === null) return left

  return root
};