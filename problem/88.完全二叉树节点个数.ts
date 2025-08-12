// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
// 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层（从第 0 层开始），则该层包含 1~ 2h 个节点。

// 输入：root = [1,2,3,4,5,6]
// 输出：6

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function countNodes(root: TreeNode | null): number {
  if (!root) return 0
  return 1 + countNodes(root.left) + countNodes(root.right)
};


// function getHeight(node) {
//   let height = 0;
//   while (node) {
//     height++;
//     node = node.left;
//   }
//   return height;
// }

// // 计算完全二叉树的节点数
// function countNodes(root) {
//   if (!root) return 0;

//   const leftHeight = getHeight(root.left);
//   const rightHeight = getHeight(root.right);

//   // 如果左子树的高度等于右子树的高度，说明左子树是完全二叉树
//   if (leftHeight === rightHeight) {
//     // 2^leftHeight - 1 是左子树的节点数，递归计算右子树
//     return (1 << leftHeight) + countNodes(root.right);
//   } else {
//     // 2^rightHeight - 1 是右子树的节点数，递归计算左子树
//     return (1 << rightHeight) + countNodes(root.left);
//   }
// }