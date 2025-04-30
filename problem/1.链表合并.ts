// 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。

// 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

class linkedList {
  constructor(public val: any = null, public next: any = null) { }
}

const arrayToList = (arr: number[]): linkedList | null => {
  if (arr.length === 0) return null;
  const head = new linkedList(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new linkedList(arr[i]);
    cur = cur.next;
  }
  return head;
};

const list1 = new linkedList(1)

list1.next = new linkedList(2)

list1.next.next = new linkedList(4)

const list2 = new linkedList(1)
list2.next = new linkedList(3)
list2.next.next = new linkedList(4)

const mergeList = (l1: linkedList, l2: linkedList) => {

  const head = new linkedList()
  let cur = head

  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2
      l2 = l2.next
    } else {
      cur.next = l1
      l1 = l1.next
    }
    cur = cur.next
  }

  cur.next = l1 || l2

  return head.next
}

// console.log(mergeList(list1, list2));

const printList1 = (l: linkedList) => {
  while (l) {
    console.log(l.val);
    l = l.next
  }
}

printList1(mergeList(list1, list2))


