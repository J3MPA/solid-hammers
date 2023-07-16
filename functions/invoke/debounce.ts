import type { AnyFn, Milliseconds } from '../../types'

export const debounce = <T extends AnyFn>(fn: T, delay: Milliseconds) => {
  let timer: NodeJS.Timeout | undefined
  let resolves: ((
    value: ReturnType<T> | PromiseLike<ReturnType<T>>
  ) => void)[] = []
  let rejects: ((reason?: any) => void)[] = []
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    clearTimeout(timer)
    return new Promise<ReturnType<T>>((resolve, reject) => {
      resolves.push(resolve)
      rejects.push(reject)
      timer = setTimeout(() => {
        try {
          const response = fn(args)
          for (const resolve of resolves) {
            resolve(response)
          }
        } catch (error) {
          for (const reject of rejects) {
            reject(error)
          }
        } finally {
          resolves = []
          rejects = []
        }
      }, delay)
    })
  }
}
