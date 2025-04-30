// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:
// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3

class linkedLists {
  constructor(public val: any = null, public next: any = null) { }
}

const arrayToLists = (arr: number[]): linkedLists | null => {
  if (arr.length === 0) return null;
  const head = new linkedLists(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new linkedLists(arr[i]);
    cur = cur.next;
  }
  return head;
};

const list3 = arrayToLists([1, 2, 2, 3]);

// console.log(list3);

const delLinkList = (l: linkedLists) => {
  let cur = l
  while (cur.next !== null) {
    if (cur.next?.val === cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next
    }
  }

  return l
}

console.log(delLinkList(list3!));




