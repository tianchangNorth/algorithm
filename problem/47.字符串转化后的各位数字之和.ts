// 给你一个由小写字母组成的字符串 s ，以及一个整数 k 。你的任务是通过一种特殊处理将字符串转为整数，然后通过重复对它的数位求和 k 次来进行转换。更具体地说，执行以下步骤：

import { get } from "http";

// 用字母在字母表中的位置 替换 该字母，将 s 转化 为一个整数（也就是，'a' 用 1 替换，'b' 用 2 替换，... 'z' 用 26 替换）。
// 接着，将整数 转换 为其 各位数字之和 。
// 共重复 转换 操作（第 2 步） k 次 。
// 例如，如果 s = "zbax" 且 k = 2 ，那么执行下述步骤后得到的结果是整数 8 ：

// 转化："zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// 转换 #1：262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// 转换 #2：17 ➝ 1 + 7 ➝ 8
// 返回执行上述 操作 后得到的 结果整数。

// 示例 1：
// 输入：s = "iiii", k = 1
// 输出：36
// 解释：
// 操作如下：
// 转化："iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// 转换 #1：9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// 因此，结果整数为 36 。

function getLucky(s: string, k: number): number {
  s = s.split('').map(char => char.charCodeAt(0) - 96).join('');
  while (k > 0) {
    s = sumCode(s).toString();
    k--;
  }
  return parseInt(s);
};

function sumCode(s: string): number {
  return s.split('').reduce((sum, char) => sum + parseInt(char), 0);
}

console.log(getLucky("zbax", 2));
// 8