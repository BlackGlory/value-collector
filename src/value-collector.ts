export class ValueCollector<T> {
  private values: T[] = []

  constructor(private prefix: string) {}

  add(val: T): string {
    return this.createKey(this.values.push(val))
  }

  toRecord(): Record<string, T> {
    const entries = this.values.map((x, i) => [this.createKey(i + 1), x])
    return Object.fromEntries(entries)
  }

  private createKey(num: number): string {
    return `${this.prefix}${num}`
  }
}
