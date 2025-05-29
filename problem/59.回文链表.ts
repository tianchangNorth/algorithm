// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

// 输入：head = [1,2,2,1]
// 输出：true

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

function isPalindrome(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // 快慢指针找到中点
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev: ListNode | null = null;
  //反转链表
  while (slow) {
    const next = slow.next; // 暂存下一个节点
    slow.next = prev;       // 当前节点指向前一个节点
    prev = slow;            // 移动 prev 和 slow 向前走
    slow = next;
  }
  // 比较前半部分和后半部分
  while (prev && head) {
    if (prev.val !== head.val) return false; // 如果不相等，返回 false
    prev = prev.next; // 向前走
    head = head.next;
  }

  return true
};


