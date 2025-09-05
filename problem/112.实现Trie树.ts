
// Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。

// 请你实现 Trie 类：

// Trie() 初始化前缀树对象。
// void insert(String word) 向前缀树中插入字符串 word 。
// boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
// boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。

type TrieNode = {
  children: Map<string, TrieNode>
  isEnd: boolean
}

class Trie {
  private root: TrieNode

  constructor() {
    this.root = this.createNode()
  }

  createNode(): TrieNode {
    return {
      children: new Map(),
      isEnd: false
    }
  }

  insert(word: string): void {
    let node = this.root

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, this.createNode())
      }
      node = node.children.get(char)!

    }
    node.isEnd = true
  }

  search(word: string): boolean {
    let node = this.root
    for (const char of word) {
      let next = node.children.get(char)
      if (!next) return false
      node = next
    }
    return node.isEnd
  }

  startsWith(prefix: string): boolean {
    let node = this.root
    for (const char of prefix) {
      let next = node.children.get(char)
      if (!next) return false
      node = next
    }
    return true
  }
}