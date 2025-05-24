// 珠玑妙算游戏（the game of master mind）的玩法如下。
// 计算机有4个槽，每个槽放一个球，颜色可能是红色（R）、黄色（Y）、绿色（G）或蓝色（B）。例如，计算机可能有RGGB 4种（槽1为红色，槽2、3为绿色，槽4为蓝色）。作为用户，你试图猜出颜色组合。打个比方，你可能会猜YRGB。要是猜对某个槽的颜色，则算一次“猜中”；要是只猜对颜色但槽位猜错了，则算一次“伪猜中”。注意，“猜中”不能算入“伪猜中”。
// 给定一种颜色组合solution和一个猜测guess，编写一个方法，返回猜中和伪猜中的次数answer，其中answer[0]为猜中的次数，answer[1]为伪猜中的次数。

// 示例：
// 输入： solution="RGBY",guess="GGRR"
// 输出： [1,1]
// 解释： 猜中1次，伪猜中1次。

function masterMind(solution: string, guess: string): number[] {
  let correctCount = 0;
  let colorOnlyCount = 0;

  const solutionCount: Record<string, number> = {};
  const guessCount: Record<string, number> = {};

  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === guess[i]) {
      correctCount++;
    } else {
      // 记录未完全匹配的字符频次
      solutionCount[solution[i]] = (solutionCount[solution[i]] || 0) + 1;
      guessCount[guess[i]] = (guessCount[guess[i]] || 0) + 1;
    }
  }

  // 颜色正确但位置错误
  for (const char in guessCount) {
    if (solutionCount[char]) {
      colorOnlyCount += Math.min(guessCount[char], solutionCount[char]);
    }
  }

  return [correctCount, colorOnlyCount];
}


console.log(masterMind("RGBY", "GGRR"));
// [1, 1]