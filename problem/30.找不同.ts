// 给定两个字符串 s 和 t ，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。


// 示例 1：
// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。

// 示例 2：
// 输入：s = "", t = "y"
// 输出："y"

function findTheDifference(s: string, t: string): string {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1)
    } else {
      let l = map.get(s[i])
      map.set(s[i], l + 1)
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i]) || map.get(t[i]) === 0) {
      return t[i]
    } else {
      let l = map.get(t[i])
      map.set(t[i], l - 1)
    }
  }

  return s[0]
};

console.log(findTheDifference("abcd", "abcde"));
