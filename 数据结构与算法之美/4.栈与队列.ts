// 判断括号是否合法
function isValid(s: string): boolean {
  const map: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const stack: string[] = []

  for (const char of s) {
    if (map[char]) {
      if (stack.pop() !== map[char]) return false
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}

// 栈实现队列
class MyQueue {
  private fstack: any[] = []
  constructor(public stack: any[] = []) { }

  push(value: any) {
    return this.stack.push(value)
  }
  in2out() {
    while (this.stack.length) {
      this.fstack.push(this.stack.pop())
    }
  }
  pop(): number {
    if (this.fstack.length) return this.fstack.pop()
    this.in2out()
    return this.fstack.pop()
  }

  peek(): number {
    if (this.fstack.length) return this.fstack[this.fstack.length - 1]
    this.in2out()
    return this.fstack[this.fstack.length - 1]
  }

  empty(): boolean {
    return this.stack.length === 0 && this.fstack.length === 0
  }
}

// 数据流中的第 K 大元素
class KthLargest {
  private heap: number[] = []

  constructor(public k: number, public nums: number[]) {
    for (const item of nums) {
      this.add(item)
    }
  }

  add(val: number): number {
    if (this.heap.length < this.k) {
      this.heap.push(val)
      this.heapifyUp(this.heap.length - 1)
    } else if (val > this.heap[0]) {
      this.pop()
      this.heap.push(val)
      this.heapifyUp(this.heap.length - 1)
    }
    return this.heap[0]
  }

  /** 弹出堆顶（最小值） */
  private pop(): number {
    const min = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length > 0 && last !== undefined) {
      this.heap[0] = last
      this.heapifyDown(0)
    }
    return min
  }

  /** 向上调整 */
  private heapifyUp(index: number): void {
    let parent = (index - 1) >> 1
    while (index > 0 && this.heap[index] < this.heap[parent]) {
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
      index = parent
      parent = (index - 1) >> 1
    }
  }

  /** 向下调整 */
  private heapifyDown(index: number): void {
    const n = this.heap.length
    while (true) {
      let smallest = index
      const left = index * 2 + 1
      const right = index * 2 + 2

      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right

      if (smallest === index) break
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
      index = smallest
    }
  }
}

const list = new KthLargest(3, [4, 5, 8, 2])

console.log(list.add(3));

console.log(list.add(6));

// console.log(list.add(1));

// console.log(list.add(-1));

// console.log(list.add(3));

// console.log(list.add(4));
