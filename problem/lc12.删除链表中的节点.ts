function deleteNode(node: ListNode | null): void {
  if (node) {
    node.val = node?.next.val
    node.next = node.next.next
  }
};