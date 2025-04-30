// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

// 示例 1:
// 输入: 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
// 输出: 1 -> 2 -> 5
// 示例 2:
// 输入: 1 -> 1 -> 1 -> 2 -> 3
// 输出: 2 -> 3

export class ListNode {
  constructor(public val: number | null = null, public next: ListNode | null = null) { }
}

const arrayToList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
};

const list5 = arrayToList([1, 1, 3, 3, 4, 4, 5]);

const delListNode = (l: ListNode) => {
  let head = new ListNode();
  let cur = head.next = l;
  while (cur && cur.next) {
    cur.val = cur.next.val;
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next
    }
  }
  return l
}

const printList = (l: ListNode | null) => {
  while (l) {
    console.log(l.val);
    l = l.next
  }
}

printList(delListNode(list5!));

