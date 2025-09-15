// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1

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

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   let s1 = '', s2 = ''
//   while (l1) {
//     s1 = l1.val + s1
//     l1 = l1.next
//   }

//   while (l2) {
//     s2 = l2.val + s2
//     l2 = l2.next
//   }

//   let sum = (Number(s1) + Number(s2)).toString()
//   let result = new ListNode(0)
//   let head = result
//   for (let i = sum.length - 1; i >= 0; i--) {
//     const cur = new ListNode(Number(sum[i]))
//     result.next = cur
//     result = result.next
//   }


//   return head.next
// };

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0)
  let cur = dummy
  let carry = 0

  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    const sum = x + y + carry

    carry = Math.floor(sum / 10)  // 进位
    cur.next = new ListNode(sum % 10)
    cur = cur.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  return dummy.next
}
