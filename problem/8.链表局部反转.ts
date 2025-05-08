// 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

// 示例:
// 输入: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// 输出: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

export class ListNode {
  constructor(public val: any = null, public next: ListNode | null = null) { }
}

const arrayToList = (arr: any[]): ListNode | null => {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
};

const list8 = arrayToList([1, 1, 3, 3, 4, 4, 7, 5, null]);

const reverseList = (l: ListNode): ListNode => {
  let pre = null
  let cur = l
  while (cur !== null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next!
  }

  return pre!
}

const printList = (l: ListNode) => {
  while (l) {
    console.log(l.val);
    l = l.next!
  }
}

const list7Reverse = reverseList(list8!)
printList(list7Reverse)
