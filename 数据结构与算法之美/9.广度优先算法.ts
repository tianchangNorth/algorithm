class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function BFS(root: TreeNode | null): number[] {
  if (!root) return [];

  const queue: TreeNode[] = [root];
  const result: number[] = [];

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}

function Bfs(root: TreeNode | null) {
  if (!root) return null
  const queue: TreeNode[] = [root]
  const result: number[] = []

  while (queue) {
    const cur = queue.shift()!

    result.push(cur?.val)

    if (cur.left) queue.push(cur.left)
    if (cur.right) queue.push(cur.right)
  }

  return result
}