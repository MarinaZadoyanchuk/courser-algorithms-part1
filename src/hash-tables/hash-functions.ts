export function getNumberHashCode(n: number): number {
  return n
}

export function getBooleanHashCode(b: boolean): number {
  if (b) return 1231
  return 1237
}

// Horner's method
export function getStringHashCode(s: string): number {
  let hash: number = 0
  let i = 0

  while(i < s.length) {
    hash = s.charCodeAt(i) + 31 * hash
    i++
  }

  return hash
}


export function getValueHashCode(value: any): number {
  if (value === null) return 0

  const valueType = (typeof value).toUpperCase()

  switch(valueType) {
    case('NUMBER'):
      return getNumberHashCode(Number(value))
    
    case('STRING'):
      return getStringHashCode(String(value))

    case('BOOLEAN'):
      return getBooleanHashCode(Boolean(value))
    
    default:
      throw Error('unknown type')
  }
}