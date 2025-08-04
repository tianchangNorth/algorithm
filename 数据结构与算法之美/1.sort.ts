// 冒泡排序 
// 空间复杂度为 O(1) 是一个原地排序算法
// 在冒泡排序中，只有交换才可以改变两个元素的前后顺序。为了保证冒泡排序算法的稳定性，当有相邻的两个元素大小相等的时候，我们不做交换，相同大小的数据在排序前后不会改变顺序，所以冒泡排序是稳定的排序算法。
// 最好时间复杂度 O(n) 最坏时间复杂度O(n^2)
const bubbleSort = (nums: number[]): number[] => {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let flag = false
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
        flag = true
      }
    }
    if (false === false) break
  }
  return nums
}

console.log(bubbleSort([1, 3, 2, 4, 5]));

// 插入排序
// 空间复杂度为 O(1) 是一个原地排序算法
// 在插入排序中，对于值相同的元素，我们可以选择将后面出现的元素，插入到前面出现元素的后面，这样就可以保持原有的前后顺序不变，所以插入排序是稳定的排序算法。
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


// 选择排序
const changeSort = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    let j = i
    let min = i
    while (j < nums.length) {
      if (nums[j] < nums[min]) {
        min = j
      }
      j++
    }
    [nums[i], nums[min]] = [nums[min], nums[i]]
  }
  return nums
}

console.log(changeSort([5, 4, 3, 2, 1]));

