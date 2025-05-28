// 二叉树数据结构TreeNode可用来表示单向链表（其中left置空，right为下一个链表节点）。实现一个方法，把二叉搜索树转换为单向链表，要求依然符合二叉搜索树的性质，转换操作应是原址的，也就是在原始的二叉搜索树上直接修改。

// 示例：
// 输入： [4,2,5,1,3,null,6,0]
// 输出： [0,null,1,null,2,null,3,null,4,null,5,null,6]

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
export class TreeNode {
  constructor(public val: any = null, public left: any = null, public right: any = null) { }
}

const A = new TreeNode('2')
const B = new TreeNode('1')
const C = new TreeNode('3')

A.left = B
A.right = C

function inorder(root: TreeNode | null, output: (a: number) => void) {
  if (!root) return;
  inorder(root.left, output);
  output(root.val);
  inorder(root.right, output);
}
function convertBiNode(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const tree = new TreeNode();
  let first = true;
  let current = tree;
  inorder(root, (a) => {
    if (first) {
      tree.val = a;
      first = false;
    } else {
      current.right = new TreeNode(a);
      current = current.right;
    }
  });
  return tree;
}

console.log(convertBiNode(A));

