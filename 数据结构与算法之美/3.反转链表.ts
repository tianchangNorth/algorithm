class ListNode {
  constructor(public val: any = null, public next: ListNode | null = null) { }
}

const reverseList = (l: ListNode): ListNode => {
  let pre: ListNode | null = null
  let cur = l

  while (cur !== null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next!
  }

  return l
}