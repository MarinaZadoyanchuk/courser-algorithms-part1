import { ComparableInterface } from '../interfaces/comparable.interface'

export class ComparableString extends String implements ComparableInterface<String> {
  private str: String

  constructor(str: String) {
    super(str)
    this.str = str
  }

  compareTo(another: String) {
    if (this.str > another) {
      return 1
    }

    if (this.str < another) {
      return -1
    }

    return 0
  }
}