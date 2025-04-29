// 真题描述： 设计一个支持以下两种操作的数据结构：
// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
// . 可以表示任何一个字母。

// 示例: addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// 说明:
// 你可以假设所有单词都是由小写字母 a-z 组成的。

class WordDictionary {
  constructor(public words: Map<number, string[]>) { }

  addWord(word: string) {
    const len = word.length;
    if (this.words.has(len)) {
      this.words.get(len)!.push(word); // 取出旧数组，追加
    } else {
      this.words.set(len, [word]); // 没有的话新建一个数组
    }
  }

  search(word: string) {
    const len = word.length
    if (!this.words.has(len)) {
      return false
    }
    if (!word.includes('.')) {
      return this.words.get(len)?.includes(word)
    }
    const reg = new RegExp(word)

    return this.words.get(len)?.some(item => reg.test(item))
  }
}

const words = new WordDictionary(new Map())

words.addWord('abcde')

words.addWord('aaa')

words.addWord('bbb')


console.log(words);

console.log(words.search('aaa'));

console.log(words.search('a..'));


