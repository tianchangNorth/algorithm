// 数组中增加元素的三种方法

// export const arr = [1,2]
// arr.unshift(0) // [0,1,2]

// const arr = [1,2]
// arr.push(3) // [1,2,3]

// const arr = [1,2] 
// arr.splice(1,0,3) // [1,3,2]

// arr.splice(1,1)

// 初始状态，栈空
const stack = []  
// 入栈过程
stack.push('东北大板')
stack.push('可爱多')
stack.push('巧乐兹')
stack.push('冰工厂')
stack.push('光明奶砖')

// 出栈过程，栈不为空时才执行
while(stack.length) {
    // 单纯访问栈顶元素（不出栈）
    const top = stack[stack.length-1]
    console.log('现在取出的冰淇淋是', top)  
    // 将栈顶元素出栈
    stack.pop()
}

// 栈空
stack // []


const queue = []  
queue.push('小册一姐')
queue.push('小册二姐')
queue.push('小册三姐')  
  
while(queue.length) {
    // 单纯访问队头元素（不出队）
    const top = queue[0]
    console.log(top,'取餐')
    // 将队头元素出队
    queue.shift()
}

// 队空
queue // []


// 链表

// 链表和数组相似，它们都是有序的列表、都是线性结构（有且仅有一个前驱、有且仅有一个后继）。不同点在于，链表中，数据单位的名称叫做“结点”，而结点和结点的分布，在内存中可以是离散的。

// 在链表中，每一个结点的结构都包括了两部分的内容：数据域和指针域。

// {
//     // 数据域
//     val: 1,
//     // 指针域，指向下一个结点
//     next: {
//         val:2,
//         next: ...
//     }
// }   

class ListNode {
    constructor(public val:any , public next:any = null) {
        this.val = val
    }
}

const node1 = new ListNode(1)

const node2 = new ListNode(2)

const node3 = new ListNode(3)

const node2_1 = new ListNode(2.1)

node1.next = node2
node2.next = node3
node2_1.next = node2.next
node2.next = node2_1


function printList(head: ListNode | null) {
    let cur = head
    while (cur) {
        console.log(cur.val)
        cur = cur.next
    }
}

printList(node1)

// 链表和数组的辨析

// 我们假设数组的长度是 n，那么因增加/删除操作导致需要移动的元素数量，就会随着数组长度 n 的增大而增大，呈一个线性关系。所以说数组增加/删除操作对应的复杂度就是 O(n)。
