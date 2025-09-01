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

// 递归写法
// 不带visited
function DFS(root: TreeNode) {
  if (!root) return

  console.log(root.val);
  for (const children of root.children) {
    DFS(children)
  }
}

// 带visited
function dfsRecursive(node: GraphNode, visited: Set<GraphNode> = new Set()): void {
  if (visited.has(node)) return // 避免死循环
  visited.add(node)

  console.log(node.val) // 访问当前节点

  for (const neighbor of node.neighbors) {
    dfsRecursive(neighbor, visited)
  }
}


// 迭代写法
function dfsIterative(root: TreeNode | null): Array<number> {
  if (!root) return []
  const stack: any[] = []
  const result: number[] = []
  while (stack.length) {
    const node = stack.pop()
    result.push(node.val)
    for (let i = root.children.length - 1; i >= 0; i--) {
      stack.push(root.children[i])
    }
  }

  return result
}
