// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。
// 根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且 至少 有 h 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。

// 示例 1：
// 输入：citations = [3,0,6,1,5]
// 输出：3
// 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
// 由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。

// 分析 h指数就是至少有n篇论文被引用了大于等于n次  我们要求最大的h

// 6 5 3 1 0
function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a)
  let h = 0
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1
    }
    else {
      break
    }
  }

  return h
};


function hIndex(citations: number[]): number {
  const n = citations.length
  const bucket = Array(n + 1).fill(0)

  // 统计每个引用次数的论文数
  for (const c of citations) {
    if (c >= n) {
      bucket[n]++
    } else {
      bucket[c]++
    }
  }

  let count = 0
  // 从高到低遍历，累加 >= i 的论文数
  for (let i = n; i >= 0; i--) {
    count += bucket[i]
    if (count >= i) {
      return i
    }
  }

  return 0
}


console.log(hIndex([3, 2, 1]));
