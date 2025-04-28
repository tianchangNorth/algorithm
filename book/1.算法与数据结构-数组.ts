const arr = new Array(10)

console.log(arr.length);

const arr1  = new Array(10).fill(0)

console.log(arr1);

//二维数组
//当你给 fill 传递一个入参时，如果这个入参的类型是引用类型，那么 fill 在填充坑位时填充的其实就是入参的引用。

const arr2 = new Array(3).fill(0).map(() => new Array(4).fill(0))

arr2[0][0] = 1
console.log(arr2);

// 二维数组的访问

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr2[i][j],i,j);
  }
}