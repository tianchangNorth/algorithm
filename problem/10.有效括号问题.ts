// 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足： 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:
// 输入: "()"
// 输出: true

// 示例 3:
// 输入: "(]"
// 输出: false

// 示例 2:
// 输入: "()[]{}"
// 输出: true

const map = new Map<string, string>([
  ['(', ')'],
  ['{', '}'],
  ['[', ']']
])

const isValid = (s: string): boolean => {
  const stack: string[] = []
  for (const char of s) {
    if (map.has(char)) {
      stack.push(map.get(char)!)
    } else {
      const top = stack.pop()
      if (top !== char) {
        return false
      }
    }
  }
  return false
}

const str1 = '{()[]}'

console.log(isValid(str1));