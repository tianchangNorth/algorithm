// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1: 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

const del = (str: string): boolean => {
  let l = 0, r = str.length - 1, len = str.length

  while (r > l) {
    if (str[l] === str[r]) {
      l++
      r--
    } else {
      if (isPalindrome(l++, r) || isPalindrome(r--, l)) {
        return true
      }
    }
  }

  function isPalindrome(st: number, ed: number) {
    while (st < ed) {
      if (str[st] !== str[ed]) {
        return false
      }
      st++
      ed--
    }
    return true
  }

  return false
}
