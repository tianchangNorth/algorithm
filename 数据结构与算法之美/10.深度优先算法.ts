export class TreeNode {
  val: number
  children: TreeNode[]

  constructor(val: number, children: TreeNode[] = []) {
    this.val = val
    this.children = children
  }
}

export class GraphNode {
  val: number
  neighbors: GraphNode[]

  constructor(val: number, neighbors: GraphNode[] = []) {
    this.val = val
    this.neighbors = neighbors
  }
}

function DFS(root: TreeNode) {
  if (!root) return

  console.log(root.val);
  for (const children of root.children) {
    DFS(children)
  }
}

function dfsRecursive(node: GraphNode, visited: Set<GraphNode> = new Set()): void {
  if (visited.has(node)) return // 避免死循环
  visited.add(node)

  console.log(node.val) // 访问当前节点

  for (const neighbor of node.neighbors) {
    dfsRecursive(neighbor, visited)
  }
}