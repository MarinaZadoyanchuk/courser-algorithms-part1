import {ComparableInterface} from './comparable.interface'

export default interface STInterface<Key extends ComparableInterface<Key>, Value> {
  put: (key: Key, value: Value) => void, // put key-value pair to table, remove key from table if value is null , overwrites existing old value
  get: (key: Key) => Value, // value paired with key, null if key is absent
  delete: (key: Key) => void,
  contains: (key: Key) => boolean,
  isEmpty: () => boolean,
  size: () => number,
  keys: () => Iterable<Key>,
  floor: (key: Key) => Key, // return the largest smaller key than given key
  rank: (key: Key) => number, // how many keys < key
}