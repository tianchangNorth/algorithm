// trie树 又名字典树 核心思想是用空间换时间  

// Trie 节点类型
type TrieNode = {
  children: Map<string, TrieNode>; // 孩子节点，key 是字符
  isEnd: boolean; // 是否是一个完整单词的结束
};

// Trie 树类型
class Trie {
  private root: TrieNode;

  constructor() {
    this.root = this.createNode();
  }

  private createNode(): TrieNode {
    return {
      children: new Map(),
      isEnd: false,
    };
  }

  // 插入一个单词
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, this.createNode());
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }

  // 查找一个单词是否存在
  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      const next = node.children.get(char);
      if (!next) return false;
      node = next;
    }
    return node.isEnd;
  }

  // 判断是否有前缀
  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      const next = node.children.get(char);
      if (!next) return false;
      node = next;
    }
    return true;
  }
}
