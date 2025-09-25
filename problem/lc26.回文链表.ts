function isPalindrome(head: ListNode | null): boolean {
  let low = head, fast = head

  while (low && fast && fast.next) {
    low = low.next
    fast = fast.next.next
  }
  let pre = null
  while (low) {
    let next = low.next
    low.next = pre
    pre = low
    low = next
  }

  while (head && pre) {
    if (head.val !== pre.val) {
      return false
    }
    head = head.next
    pre = pre.next
  }

  return true
};