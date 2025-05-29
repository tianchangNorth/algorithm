// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]

// 示例 2：
// 输入：head = [], val = 1
// 输出：[]

// 示例 3：
// 输入：head = [7,7,7,7], val = 7
// 输出：[]

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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let current = head;

  while (head && head.next) {
    if (head.next.val === val) {
      head.next = head.next.next; // 删除当前节点
    } else {
      head = head.next; // 移动到下一个节点
    }
  }
  return current?.val === val ? current.next : current; // 如果头节点也需要删除，返回下一个节点
};