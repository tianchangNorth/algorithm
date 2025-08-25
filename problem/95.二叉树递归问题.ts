// 二叉树最大深度
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

// 二叉树节点个数
const countNodes1 = (root: TreeNode | null): number => {
  if (!root) return 0
  return 1 + countNodes1(root.left) + countNodes1(root.right)
}

// 二叉树最小深度
const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0
  else if (root.left === null) return 1 + minDepth(root.right)
  else if (root.right === null) return 1 + minDepth(root.left)
  return 1 + Math.min(minDepth(root.right), minDepth(root.left))
}

//反转二叉树
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}

// 判断二叉树是否对称
const checks = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}

var isSymmetric = function (root: TreeNode | null): boolean {
  return check(root?.left, root?.right);
};

// 返回所有二叉树路径

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return []
  if (!root.left && !root.right) return [root.val.toString()]

  let ans: string[] = []
  // 左子树路径
  for (const item of binaryTreePaths(root.left)) {
    ans.push(root.val + '->' + item)
  }

  //右子树路径
  for (const item of binaryTreePaths(root.right)) {
    ans.push(root.val + '->' + item)
  }

  return ans
};

