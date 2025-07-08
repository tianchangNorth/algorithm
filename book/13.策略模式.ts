type StrategyFn = (args?: any) => any;

class StrategyManager {
  private strategies: Record<string, StrategyFn> = {};

  register(key: string, fn: StrategyFn) {
    this.strategies[key] = fn;
  }

  execute(key: string, args?: any) {
    const fn = this.strategies[key];
    if (!fn) throw new Error(`No strategy for key: ${key}`);
    return fn(args);
  }
}

const manager = new StrategyManager();

manager.register("add", (args: number[]) => args.reduce((acc, cur) => acc + cur, 0));
manager.register("subtract", (args: number[]) => args.reduce((acc, cur) => acc - cur, 0));
manager.register("multiply", (args: number[]) => args.reduce((acc, cur) => acc * cur, 1));

console.log(manager.execute("add", [1, 2, 3])); // 6
console.log(manager.execute("subtract", [1, 2, 3])); // -4
console.log(manager.execute("multiply", [1, 2, 3])); // 6