import { ValueCollector } from '@src/value-collector'

describe('ValueCollector', () => {
  test('add', () => {
    const collector = new ValueCollector<string>('foo')

    const id1 = collector.add('hello')
    const id2 = collector.add('world')

    expect(id1).toBe('foo1')
    expect(id2).toBe('foo2')
  })

  test('toRecord', () => {
    const collector = new ValueCollector<string>('foo')
    collector.add('hello')
    collector.add('world')

    const result = collector.toRecord()

    expect(result).toStrictEqual({
      foo1: 'hello'
    , foo2: 'world'
    })
  })
})
