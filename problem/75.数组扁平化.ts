// 数组扁平化

function flattenArray(arr: any[]) {
  return arr.reduce((acc, val) => Array.isArray(val) ? [...acc, ...flattenArray(val)] : [...acc, val], []);
} 