// 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。

// 实现 MyHashSet 类：

// void add(key) 向哈希集合中插入值 key 。
// bool contains(key) 返回哈希集合中是否存在这个值 key 。
// void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。

// 示例：
// 输入：
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// 输出：
// [null, null, null, true, false, null, true, null, false]

// 解释：
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // 返回 True
// myHashSet.contains(3); // 返回 False ，（未找到）
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // 返回 True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // 返回 False ，（已移除）

class MyHashSet {
  constructor(private list: any = {}) {

  }

  add(key: number): void {
    if (!this.contains(key)) {
      this.list[key] = true; // 使用对象的键来模拟哈希表
    }
  }

  remove(key: number): void {
    if (this.contains(key)) {
      delete this.list[key]; // 删除对象的键
    }
  }

  contains(key: number): boolean {
    return !!this.list[key]; // 检查对象是否有该键
  }
}