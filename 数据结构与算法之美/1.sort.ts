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
// 空间复杂度为 O(1) 是一个原地排序算法
// 选择排序是一种不稳定的排序算法，选择排序每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，这样破坏了稳定性。
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


//从代码实现上来看，冒泡排序的数据交换要比插入排序的数据移动要复杂，冒泡排序需要 3 个赋值操作，而插入排序只需要 1 个，我们把执行一个赋值语句的时间粗略地计为单位时间（unit_time），
// 然后分别用冒泡排序和插入排序对同一个逆序度是 K 的数组进行排序。用冒泡排序，需要 K 次交换操作，每次需要 3 个赋值语句，所以交换操作总耗时就是 3*K 单位时间。而插入排序中数据移动操作只需要 K 个单位时间


// 归并排序
// 归并排序是一种不原地但稳定的排序算法
// 时间复杂度 nlogn
const mergeSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums

  const mid = Math.floor(nums.length / 2)
  const left = mergeSort(nums.slice(0, mid))
  const right = mergeSort(nums.slice(mid))

  return merge(left, right)
}

const merge = (left: number[], right: number[]): number[] => {
  const res: number[] = []
  let i = 0, j = 0
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      res.push(left[i])
      i++
    } else {
      res.push(right[j])
      j++
    }
  }

  return res.concat(left.slice(i)).concat(right.slice(j));
}

// 快速排序
// 快排是一种原地、不稳定的排序算法 
// 时间复杂度 nlogn
const quickSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums
  const key = nums[0]
  const right = nums.filter(item => item > nums[0])
  const left = nums.filter(item => item < nums[0])
  return [...quickSort(left), key, ...quickSort(right)]
}

console.log('quick', quickSort([5, 4, 3, 2, 1]));

// 计数排序
// 计数排序只能用在数据范围不大的场景中，如果数据范围 k 比要排序的数据 n 大很多，就不适合用计数排序了。而且，计数排序只能给非负整数排序，如果要排序的数据是其他类型的，要将其在不改变相对大小的情况下，转化为非负整数。
const countingSort = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums

  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i]
  }

  let count = new Array(max + 1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++
  }

  for (let i = 1; i < count.length; i++) {
    count[i] = count[i - 1] + count[i]
  }

  let result = new Array(nums.length)

  for (let i = nums.length - 1; i >= 0; i--) {
    let index = count[nums[i]] - 1
    result[index] = nums[i]
    count[nums[i]]--
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i]
  }

  return nums
}

console.log('counting', countingSort([5, 4, 4, 3, 3, 3, 2, 2, 1]));


