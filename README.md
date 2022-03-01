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
  constructor(private prefix: string)

  add(val: T): string
  toRecord(): Record<string, T>
}
```
