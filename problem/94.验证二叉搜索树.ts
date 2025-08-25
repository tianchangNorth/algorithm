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

function isValidBST(root: TreeNode | null): boolean {
  // 辅助递归函数，检查节点值是否在 (min, max) 区间内
  function helper(node: TreeNode | null, min: number | null, max: number | null): boolean {
    if (node === null) return true

    // 检查当前节点是否违反 BST 规则
    if (min !== null && node.val <= min) return false
    if (max !== null && node.val >= max) return false

    // 左子树：上限变为 node.val
    // 右子树：下限变为 node.val
    return helper(node.left, min, node.val) && helper(node.right, node.val, max)
  }

  return helper(root, null, null)
}