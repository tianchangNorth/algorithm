// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

// 示例 1：
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

// 示例 2：
// 输入：root = [1]
// 输出：[[1]]

// 示例 3：
// 输入：root = []
// 输出：[]

// 树中节点数目在范围 [0, 2000] 内
// -1000 <= Node.val <= 1000

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const roots = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const answer: number[][] = []
  const queue: TreeNode[] = [root]

  while (queue.length) {
    const list: number[] = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()!
      list.push(cur.val)
      if (cur?.left) queue.push(cur.left)
      if (cur?.right) queue.push(cur.right)
    }

    answer.push(list)
  }
  return answer
};

console.log(levelOrder(roots));
