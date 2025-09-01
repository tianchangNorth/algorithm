// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

// 示例 2：
// 输入：n = 1
// 输出：["()"]
function generateParenthesis(n: number): string[] {
  const list: string[] = []

  function gen(left: number, right: number, n: number, result: string) {
    if (left === n && right === n) {
      list.push(result)
      return
    }
    if (left < n) {
      gen(left + 1, right, n, result + '(')
    }
    if (left > right && right < n) {
      gen(left, right + 1, n, result + ')')
    }
  }

  gen(0, 0, n, '')
  return list
};


console.log(generateParenthesis(2));
