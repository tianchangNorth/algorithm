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
  private minheap: number[] = []
  constructor(public k: number, public nums: number[]) {
    this.minheap = nums.sort((a, b) => a - b).slice(-k)
  }

  quickSort(nums: number[]): number[] {
    if (nums.length <= 1) return nums
    const key = nums[0]
    const left = nums.filter(item => item < key)
    const mid = nums.filter(item => item === key)
    const right = nums.filter(item => item > key)
    return [...this.quickSort(left), ...mid, ...this.quickSort(right)]
  }
  add(val: number): number {
    this.minheap.push(val)
    this.minheap = this.quickSort(this.minheap).slice(-this.k) // ✅ 裁剪
    return this.minheap[0]
  }
}

const list = new KthLargest(3, [4, 5, 8, 2])

console.log(list.add(3));

// console.log(list.add(1));

// console.log(list.add(-1));

// console.log(list.add(3));

// console.log(list.add(4));
