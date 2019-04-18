import React from 'react'
import 'jest-styled-components'
import { LookSizePicker } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  products: [
    {
      image: {
        alt: 'Fuzzy Tiger Tee front',
        src: 'https://res.cloudinary.com/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/rfxx1bcmwy7zych1pmof.png'
      },
      sizes: [
        {value: 3, inStock: true},
        {value: 4, inStock: true},
        {value: 5, inStock: true},
        {value: 6, inStock: true},
        {value: 7, inStock: false},
        {value: 9, inStock: true},
        {value: 12, inStock: true},
      ],
      id: '12345'
    },
    {
      image: {
        alt: 'Cool Down Active Short front',
        src: 'https://res.cloudinary.com/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/xrpiecxqwmiso3acxucc.png'
      },
      sizes: [
        {value: 3, inStock: true},
        {value: 4, inStock: true},
        {value: 5, inStock: true},
        {value: 6, inStock: true},
        {value: 7, inStock: false},
        {value: 9, inStock: true},
        {value: 12, inStock: true},
      ],
      id: '12346'
    }
  ]
}

describe('() LookSizePicker', () => {
  const createLookSizePicker = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<LookSizePicker {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createLookSizePicker())
    .toMatchSnapshot()
  })

  test('renders proper amount of products', () => {
    expect(createLookSizePicker().find('.product').length).toEqual(defaultProps.products.length)
  })
})