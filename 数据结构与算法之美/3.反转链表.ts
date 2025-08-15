class ListNode {
  constructor(public val: any = null, public next: ListNode | null = null) { }
}

const reverseList = (l: ListNode): ListNode => {
  let pre: ListNode | null = null
  let cur = l

  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next!
  }

  return pre!
}


// 两两反转链表
// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode()
  dummy.next = head

  let cur = dummy

  while (cur.next !== null && cur.next.next !== null) {
    let [temp1, temp2, temp3] = [cur.next, cur.next.next, cur.next.next.next]
    cur.next = temp2
    temp2.next = temp1
    temp1.next = temp3

    cur = temp1
  }
  return dummy.next
};