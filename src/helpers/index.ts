/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/29 19:27:05 (GMT+0900)
 */
export * from './storage'

/**
 * async function
 * @param s
 */
export function asyncFn(s = 2): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, s * 1000)
  })
}
