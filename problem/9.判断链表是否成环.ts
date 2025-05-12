// 真题描述：给定一个链表，判断链表中是否有环。

// 示例 1：
// 输入：[3,2,0,4]（链表结构如下图） 输出：true
// 解释：链表中存在一个环，环的尾部连接到第n个节点。

export class ListNode {
  constructor(public val: any = null, public next: ListNode | null = null, public flag: any = null) { }
}

const arrayToList = (arr: any[]): ListNode | null => {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
};

const list9 = arrayToList([1, 1, 3]);

list9!.next!.next!.next = list9!.next; // 创建环

const hasCycle = (l: ListNode) => {
  let num = 1
  while (l) {
    if (l.flag) {
      console.log('note', l.flag);
      return l.flag
    } else {
      l.flag = num++
      console.log('flag', l.flag, 'val', l.val);
      l = l.next!
    }
  }
  return false
}

console.log(hasCycle(list9!));

