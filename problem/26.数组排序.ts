//插入排序
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];       // 当前要插入的元素
    let j = i - 1;

    // 把比 key 大的都往后移
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // 插入 key 到正确位置
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([3, 1, 5, 2, 4]));

//冒泡排序
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 1, 5, 2, 4]));

//快速排序
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  const key = arr[0]
  const left = arr.slice(1).filter(item => item < key)
  const right = arr.slice(1).filter(item => item > key)
  console.log('left', left);
  console.log('right', right);
  return [...quickSort(left), key, ...quickSort(right)]
}

console.log(quickSort([3, 1, 5, 2, 4]));