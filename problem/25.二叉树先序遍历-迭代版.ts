// 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
// 示例: 输入: [1,null,2,3]
// 1
//  \
//   2
//  /
// 3

// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

export class TreeNode {
  constructor(public val: any, public left: any = null, public right: any = null) { }
}

const A = new TreeNode('1')
const B = new TreeNode('2')
const C = new TreeNode('3')

A.right = B

B.left = C

const Tree = (tree: TreeNode) => {
  if (!tree) return;
  console.log(tree.val);
  Tree(tree.left)
  Tree(tree.right)
}

Tree(A)
