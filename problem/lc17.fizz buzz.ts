

function fizzBuzz(n: number): string[] {
  const list: string[] = []
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 15 === 0:
        list.push('FizzBuzz')
        break
      case i % 5 === 0:
        list.push("Buzz")
        break
      case i % 3 === 0:
        list.push('Fizz')
        break

      default:
        list.push(`${i}`)
        break
    }
  }
  return list
};