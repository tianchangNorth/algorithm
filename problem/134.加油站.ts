// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

// 示例 1:
// 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// 输出: 3
// 解释:
// 从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
// 开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
// 开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
// 开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
// 开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
// 开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
// 因此，3 可为起始索引。

//解释：从第n个加油站出发可以绕一圈返回加油站n  初始无油

// function canCompleteCircuit(gas: number[], cost: number[]): number {
//   const n = gas.length

//   for (let i = 0; i < n; i++) {
//     let cur = 0
//     let success = true
//     for (let j = 0; j < n; j++) {
//       cur += gas[(i + j) % n] - cost[(i + j) % n]
//       if (cur < 0) {
//         success = false
//         break
//       }
//     }
//     if (success) return i
//   }

//   return -1
// }

function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length
  let total = 0, tank = 0, start = 0

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i]
    total += diff
    tank += diff
    if (tank < 0) {
      start += 1
      tank = 0
    }
  }

  return total > 0 ? -1 : start
}


console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
