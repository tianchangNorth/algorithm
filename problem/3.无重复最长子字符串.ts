// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>()
  let left = 0
  let maxLen = 0

  for (let right = 0; right < s.length; right++) {
    const char = s[right]

    if (map.has(char)) {
      // 左指针移动到重复字符的下一位置，注意不要回退
      left = Math.max(left, map.get(char)!)
    }

    maxLen = Math.max(maxLen, right - left + 1)
    map.set(char, right + 1) // 记录字符最后出现位置 +1
  }

  return maxLen
}


console.log(lengthOfLongestSubstring("tmmzuxt"));
