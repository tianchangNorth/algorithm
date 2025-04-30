// 给你一个字符串 s，找到 s 中最长的 回文 子串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

// function longestPalindrome(s: string): string {
//   let res = '';
//   for (let i = 0; i < s.length; i++) {
//     // 寻找长度为奇数的回文子串(以当前元素向两边扩散)
//     const s1 = palindrome(s, i, i);
//     // 寻找长度为偶数的回文子串(以s[i],s[i + 1])向两边扩散
//     const s2 = palindrome(s, i, i + 1);
//     res = res.length > s1.length ? res : s1;
//     res = res.length > s2.length ? res : s2;
//   }
//   return res;
// };

// function palindrome(s: string, l: number, r: number) {
//   // 左右指针，从s[l]和s[r]向两边扩散，找到最长回文串
//   while (l >= 0 && r < s.length && s[l] == s[r]) {
//     l--; r++;
//   }
//   return s.substr(l + 1, r - l - 1);
// }

function longestPalindrome(str: string): string {
  return ''
}

console.log(longestPalindrome('bb'));
