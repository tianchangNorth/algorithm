class TreeNode{
  constructor(public val:any , public left:any = null, public right:any = null) {}
}

const root = new TreeNode(1)

const left = new TreeNode(2)
const right = new TreeNode(3)

root.left = left
root.right = right

console.log(root);