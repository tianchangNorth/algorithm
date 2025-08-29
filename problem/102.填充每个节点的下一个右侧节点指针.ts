// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

// 初始状态下，所有 next 指针都被设置为 NULL。



class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  next: _Node | null
  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}


function connect(root: _Node | null): _Node | null {
  if (!root) return null
  if (root.left !== null) {
    root.left.next = root.right
    if (root.next !== null) {
      root.right!.next = root.next.left
    }
  }

  connect(root.left)
  connect(root.right)
  return root
};