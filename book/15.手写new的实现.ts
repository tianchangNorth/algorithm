const myNew = (constructor: any, ...args: any) => {
  // const obj = {} as any
  // obj.__proto__ = constructor.prototype
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  const result = constructor.apply(obj, ...args)
  return typeof result === 'object' && result !== null ? result : obj;
}