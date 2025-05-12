// 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

// 示例:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); --> 返回 -3.
// minStack.pop();
// minStack.top(); --> 返回 0.
// minStack.getMin(); --> 返回 -2.

export class MinStack {
  constructor(private stack: number[] = [], private minStack: number[] = []) { }
  push(x: number): void {
    this.stack.push(x)
    if (this.minStack.length === 0 || x <= this.getMin()) {
      this.minStack.push(x)
    } else {
      this.minStack.push(this.getMin())
    }
  }
  top(): number {
    return this.stack[this.stack.length - 1]
  }
  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }
  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

const minStack = new MinStack()

minStack.push(-2)

minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin()); // --> 返回 -3.
minStack.pop()
console.log(minStack.top()); // --> 返回 0.