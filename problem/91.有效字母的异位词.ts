// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 字母异位词。

// 输入: s = "anagram", t = "nagaram"
// 输出: true


function isAnagram(s: string, t: string): boolean {
  const obj: Record<string, number> = {}

  for (const item of s) {
    obj[item] ? obj[item] += 1 : obj[item] = 1
  }


  for (const item of t) {
    if (obj[item]) {
      obj[item] -= 1
    } else {
      return false
    }
  }

  for (const key in obj) {
    if (obj[key]) return false
  }
  return true
};



function isAnagram1(s: string, t: string): boolean {
  const obj: Record<string, number> = {}

  for (const item of s) {
    obj[item] ? obj[item] += 1 : obj[item] = 1
  }


  for (const item of t) {
    if (obj[item]) {
      obj[item] -= 1
    } else {
      return false
    }
  }

  for (const key in obj) {
    if (obj[key]) return false
  }
  return true
};

console.log(isAnagram('anagram', 'nagaram'));
