// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([])"
// 输出：true

const bracketMap: Record<string, string> = {
  '(': ')',
  '{': '}',
  '[': ']'
}
function isValids(s: string): boolean {
  const stack: string[] = [];
  for (const char of s) {
    if (bracketMap[char]) {
      stack.push(char); // 左括号入栈
    } else {
      const last: any = stack.pop(); // 弹出栈顶元素
      if (bracketMap[last] !== char) {
        return false; // 如果不匹配，则返回 false
      }
    }
  }
  return stack.length === 0; // 如果栈为空，则所有括号都匹配
};