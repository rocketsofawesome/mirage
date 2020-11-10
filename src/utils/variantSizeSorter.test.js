import { sortVariantsBySize } from 'SRC'

describe('(Utils) sortVariantsBySize', () => {
  it('returns an array of variants sorted by their size', () => {
    const variants = [
      { id: 1, size: '4' },
      { id: 2, size: '2' },
      { id: 3, size: '3' }
    ]

    const result = sortVariantsBySize(variants)

    expect(result).toEqual([
      { id: 2, size: '2' },
      { id: 3, size: '3' },
      { id: 1, size: '4' }
    ])
  })

  it('handles letter sizes', () => {
    const variants = [
      { id: 1, size: 'S' },
      { id: 2, size: 'XS' },
      { id: 3, size: 'L' },
      { id: 4, size: 'M' },
      { id: 5, size: 'XXS' },
      { id: 6, size: 'XL' }
    ]

    const result = sortVariantsBySize(variants)

    expect(result).toEqual([
      { id: 5, size: 'XXS' },
      { id: 2, size: 'XS' },
      { id: 1, size: 'S' },
      { id: 4, size: 'M' },
      { id: 3, size: 'L' },
      { id: 6, size: 'XL' }
    ])
  })
})
