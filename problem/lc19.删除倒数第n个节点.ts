function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy: ListNode = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  // fast 先走 n+1 步，使 slow 停在要删除节点的前一个
  for (let i = 0; i < n; i++) {
    fast = fast!.next;
  }

  // fast 和 slow 一起走
  while (fast?.next) {
    fast = fast.next;
    slow = slow!.next;
  }

  // 删除 slow.next
  if (slow && slow.next) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}