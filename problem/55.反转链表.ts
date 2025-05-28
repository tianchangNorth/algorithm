// 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。

function reverseList(head: ListNode | null): ListNode | null {
  let dummy: ListNode | null = null;
  let current = head;
  while (current !== null) {
    const next = current.next
    current.next = dummy
    dummy = current
    current = next
  }
  return dummy
};