// 函数通过调用自身实现循环调用

// 阶乘
function factorial(n: number): number {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

// 1.  
// 递归函数应该有一个明确的 语义，比如：
// f(n)：判断 n 是否是 2 的幂次方
// dfs(i)：从下标 i 开始能否构造出某种结果
// traverse(node)：遍历以 node 为根的子树
// 👉 一定要先写出这个函数做什么，而不是直接写递归。

// 2. 找到递归终止条件（Base Case）
// 没有终止条件会无限递归导致栈溢出。
// 常见的终止条件：
// 数字类：n == 0 或 n == 1
// 数组/字符串类：下标越界
// 树/图类：节点为空（null）
// 组合类：长度满足要求 / 所有元素都被遍历

// 3. 拆分子问题（递归公式）
// 把原问题分解为 规模更小的同类问题。
// 常见拆法：
// 缩小规模：f(n) → f(n-1)
// 分治：f(n) → f(n/2) + f(n/2)
// 枚举选择：dfs(choices) → dfs(choices - 1)

// 4. 合并子结果（回溯 / 求和 / 判断）
// 根据问题的需求，把子结果合并：
// 累加：res = f(left) + f(right)
// 累乘：res = f(n-1) * n
// 逻辑判断：res = f(left) or f(right)
// 收集结果：push 到全局数组

// 斐波拉契数列
function fib(n: number): number {
  if (n === 0 || n === 1) return n

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(3));

// 计算x的n次方

function xPowN(x: number, n: number): number {
  if (n === 0) return 1
  if (n < 0) return 1 / xPowN(x, -n)

  if (n % 2 === 0) {
    const half = xPowN(x, n / 2)
    return half * half
  } else {
    const half = xPowN(x, Math.floor(n / 2))
    return half * half * x
  }

}

console.log(xPowN(2, 3));

