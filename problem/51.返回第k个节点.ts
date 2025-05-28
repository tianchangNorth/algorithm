// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
// 注意：本题相对原题稍作改动

// 示例：
// 输入： 1->2->3->4->5 和 k = 2
// 输出： 4
// 说明：
// 给定的 k 保证是有效

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

function kthToLast(head: ListNode | null, k: number): number {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const next = current.next; // 暂存下一个节点
    current.next = prev;       // 当前节点指向前一个节点
    prev = current;            // 移动 prev 和 current 向前走
    current = next;
  }

  while (k > 1 && prev !== null) {
    prev = prev.next; // 向前走 k-1 步
    k--;
  }

  return prev?.val
};