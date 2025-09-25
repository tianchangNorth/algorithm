// 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
// 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
// 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

// 输入：n = 5, bad = 4
// 输出：4
// 解释：
// 调用 isBadVersion(3) -> false 
// 调用 isBadVersion(5) -> true 
// 调用 isBadVersion(4) -> true
// 所以，4 是第一个错误的版本。


/**
 * isBadVersion API 已经定义。
 * @param {integer} version
 * @return {boolean} 是否是坏版本
 * var isBadVersion = function(version) {}
 */

var solution = function (isBadVersion: (v: number) => boolean) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      // 避免溢出写法
      let mid = left + ((right - left) >> 1)

      if (isBadVersion(mid)) {
        // mid 可能是第一个坏的，但还要继续查找更早的
        right = mid;
      } else {
        // mid 不是坏的，第一个坏版本一定在右边
        left = mid + 1;
      }
    }

    // 循环结束时，left === right，就是第一个坏版本
    return left;
  };
};