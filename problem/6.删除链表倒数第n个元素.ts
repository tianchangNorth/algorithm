// 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.
// 说明： 给定的 n 保证是有效的。

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

const list6 = arrayToList([1, 1, 3, 3, 4, 4, 7, 5]);


// const delListNode = (l: ListNode, n: number): ListNode => {
//   let dummy = new ListNode();
//   dummy.next = l;
//   let len = 0;
//   while (dummy.next) {
//     len++
//     dummy = dummy.next!
//   }
//   const delIndex = len - n + 1

//   dummy = new ListNode();
//   dummy.next = l;
//   for (let i = 1; i <= len; i++) {

//     if (i === delIndex) {
//       dummy.next = dummy.next!.next
//     } else {
//       dummy = dummy.next!
//     }
//   }

//   return l
// }

const delListNode = (l: ListNode, n: number): ListNode => {
  const dummy = new ListNode();
  dummy.next = l;
  let fast = dummy;
  let slow = dummy;
  while (n !== 0) {
    fast = fast.next!
    n--
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next!
  }

  slow.next = slow.next!.next

  return dummy.next!;
}

const printList = (l: ListNode) => {
  while (l) {
    console.log(l.val);
    l = l.next!
  }
}

printList(delListNode(list6!, 2))
