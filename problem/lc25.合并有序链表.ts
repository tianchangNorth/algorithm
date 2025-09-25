function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2
  if (list2 === null) return list1
  let head = new ListNode(0)
  let cur = head
  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2
      list2 = list2.next
    } else {
      cur.next = list1
      list1 = list1.next
    }
    cur = cur.next
  }
  cur.next = list1 === null ? list2 : list1
  return head.next
};

// 递归法
function mergeTwoListss(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2
  if (list2 === null) return list1
  if (list1.val < list2.val) {
    list1.next = mergeTwoListss(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoListss(list1, list2.next)
    return list2
  }
};