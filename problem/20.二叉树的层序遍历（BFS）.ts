export const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

const traversalTree = (tree: any): void => {
  const queue = []
  queue.push(tree)
  while (queue.length) {
    const top: any = queue.shift()
    console.log(top.val);
    if (top.left) {
      queue.push(top.left)
    }
    if (top.right) {
      queue.push(top.right)
    }
  }
}

traversalTree(root)