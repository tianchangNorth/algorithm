// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  constructor(public val: any = null, public next: any = null) { }
}

export const arrayToLists = (arr: any[]): ListNode | null => {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
};

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = head;
  while (dummy && dummy.next) {
    if (dummy.val === dummy.next.val) {
      dummy.next = dummy.next.next; // 删除重复节点
    } else {
      dummy = dummy.next; // 移动到下一个节点
    }
  }
  return head
};

const list1 = arrayToLists([1, 2, 2]);

console.log(deleteDuplicates(list1));