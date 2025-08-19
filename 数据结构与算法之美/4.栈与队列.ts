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

class Queue {
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