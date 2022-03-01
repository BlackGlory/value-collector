# value-collector
## Install
```sh
npm install --save value-collector
# or
yarn add value-collector
```

## API
### ValueCollector
```ts
class ValueCollector {
  constructor(prefix: string)

  add(val: T): string
  toRecord(): Record<string, T>
}
```
