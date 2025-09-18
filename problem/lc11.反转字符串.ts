// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题

// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

function reverseString(s: string[]): void {
  let l = 0, r = s.length - 1
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]]
    l++
    r--
  }
  console.log(s);

};

reverseString(['a', 'b', 'c', 'd', 'e'])