// 数组扁平化、

function flattenArray(arr: any[]) {
  return arr.reduce((acc, val) => Array.isArray(val) ? [...acc, ...flattenArray(val)] : [...acc, val], []);
}
console.log(flattenArray([1, [2, [3, [4]], 5]])); // 输出 [1, 2, 3, 4, 5]

let nestedArray = [1, [2, [3, [4]], 5]];
console.log(nestedArray.flat(Infinity)); // 输出 [1, 2, 3, 4, 5]