const threeSum = (num: number[]) => {
  num = num.sort((a, b) => a - b)
  let list: object[] = []
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i - 1]) {
      continue
    }
    let l = i + 1, f = num.length - 1
    while (l < f) {
      const count = num[i] + num[l] + num[f]
      if (count === 0) {
        list.push([num[i], num[l], num[f]])
        l++
        f--
        while (num[l] === num[l - 1]) {
          l++
        }
        while (num[f] === num[f + 1]) {
          f--
        }
      }
      else if (count > 0) {
        f--
      }
      else {
        l++
      }
    }
  }
  return list
}

console.log(threeSum([0, 0, 0, 0]));
