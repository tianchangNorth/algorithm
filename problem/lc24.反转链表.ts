function reverseList(head: ListNode | null): ListNode | null {
  let pre = null, cur = head
  while (cur !== null) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};