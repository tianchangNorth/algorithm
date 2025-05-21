// 链表回文判断

import { log } from "node:console";

//a->b->b->a   true

class linkedLists {
  constructor(public val: any = null, public next: any = null) { }
}

export const arrayToLists = (arr: any[]): linkedLists | null => {
  if (arr.length === 0) return null;
  const head = new linkedLists(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new linkedLists(arr[i]);
    cur = cur.next;
  }
  return head;
};

const list24 = arrayToLists(['a', 'b', 'a', 'b', 'a']);

const palindromic = (head: ListNode | null): boolean => {
  if (!head || !head.next) return true;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // 1. 快慢指针找中点
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // 2. 奇数长度的链表，跳过中间那个节点
  if (fast) {
    slow = slow!.next;
  }

  // 3. 反转后半段链表
  let prev: ListNode | null = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // 4. 比较前半段和后半段
  let p1 = head;
  let p2 = prev;
  while (p2) {
    if (p1!.val !== p2.val) return false;
    p1 = p1!.next!;
    p2 = p2.next!;
  }

  return true;
};


console.log(palindromic(list24!));