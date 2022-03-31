/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/29 19:27:05 (GMT+0900)
 */
class CustomStorage {
  private readonly prefix: string
  private storage: Storage

  constructor(prefix: string) {
    this.prefix = prefix
    this.storage = localStorage
  }

  /**
   * set item
   * @param key
   * @param value
   */
  public set<T>(key: string, value: T): void {
    this.storage.setItem(`${this.prefix}_${key}`, JSON.stringify(value))
  }

  /**
   * get item
   * @param key
   * @param defaultValue
   */
  public get<T>(key: string, defaultValue: T): T {
    const cache = this.storage.getItem(`${this.prefix}_${key}`)
    if (cache) {
      try {
        return JSON.parse(cache)
      } catch (e) {}
    }
    return defaultValue
  }

  /**
   * remove item
   * @param key
   */
  public remove(key: string): void {
    this.storage.removeItem(`${this.prefix}_${key}`)
  }

  /**
   * clear storage
   */
  public clear(): void {
    this.storage.clear()
  }
}

export const storage = new CustomStorage('rmtv')
