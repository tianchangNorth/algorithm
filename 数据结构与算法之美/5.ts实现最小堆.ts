class MinHeap {
  private heap: number[] = []

  /** 获取堆大小 */
  size(): number {
    return this.heap.length
  }

  /** 获取堆顶（最小值） */
  peek(): number | undefined {
    return this.heap[0]
  }

  /** 插入元素 */
  push(val: number): void {
    this.heap.push(val)
    this.heapifyUp(this.heap.length - 1)
  }

  /** 弹出堆顶（最小值） */
  pop(): number | undefined {
    if (this.heap.length === 0) return undefined
    if (this.heap.length === 1) return this.heap.pop()

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()! // 用最后一个元素替换堆顶
    this.heapifyDown(0)
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
