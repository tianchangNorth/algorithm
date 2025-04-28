// 实现二叉树

export class TreeNode {
  constructor(public val:any , public left:any = null, public right:any = null) {}
}

const A = new TreeNode('A')
const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')

A.left = B
A.right = C
B.left = D
B.right = E
C.right = F

console.log(A);

// 二叉树的遍历
console.log('前序遍历');
function preOrder(root: TreeNode) {
  if(!root) return
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}
preOrder(A) 

console.log('中序遍历');
function inOrder(root: TreeNode) {
  if(!root) return
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}
inOrder(A)

console.log('后序遍历');
function postOrder(root: TreeNode) {
  if(!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}
postOrder(A)