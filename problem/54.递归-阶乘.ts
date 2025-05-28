function factorial(n: number): number {
  return n === 0 ? 1 : n * factorial(n - 1);
}
factorial(5); // 120