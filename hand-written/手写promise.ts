import { rejects } from "assert";
import { resolve } from "path";

type ResolveFunc = (value: any) => void;
type RejectFunc = (reason: any) => void;

class MyPromise {
  private state: 'pending' | 'fulfilled' | 'rejected' = 'pending'
  private value: any = undefined
  private reason: any = undefined
  private onFulfilledCallbacks: ResolveFunc[] = [];
  private onRejectedCallbacks: RejectFunc[] = [];

  constructor(executor: (ResolveFunc, RejectFunc) => void) {
    const resolve = (value: any) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.onFulfilledCallbacks.forEach(fn => fn(value))
      }
    }

    const reject = (reason: any) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn(reason))
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled?: ResolveFunc, onRejected?: RejectFunc) {
    return new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        try {
          const x = onFulfilled?.(this.value)
          resolve(x)
        } catch (err) {
          reject(err)
        }
      }
      else if (this.state === 'rejected') {
        try {
          const x = onRejected?.(this.value)
          resolve(x)
        } catch (err) {
          reject(err)
        }
      }
      else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push((value) => {
          try {
            const x = onFulfilled?.(value);
            resolve(x);
          } catch (err) {
            reject(err);
          }
        })

        this.onRejectedCallbacks.push((reason) => {
          try {
            const x = onRejected?.(this.reason)
            reject(x)
          } catch (err) {
            reject(err)
          }
        })
      }
    })
  }
}