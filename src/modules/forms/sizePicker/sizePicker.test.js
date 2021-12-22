import React from 'react'
import 'jest-styled-components'
import { SquareRadioButton, SizePicker } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  productId: '12345',
  currentSize: 'sku-12345',
  onSizeSelect: () => {},
  variants: [
    {sku: "sku-12345", size: 3, inStock: true},
    {sku: "sku-21354", size: 4, inStock: true},
    {sku: "sku-13245", size: 5, inStock: true},
    {sku: "sku-15234", size: 6, inStock: true},
    {sku: "sku-14235", size: 7, inStock: false},
    {sku: "sku-13254", size: 9, inStock: true},
    {sku: "sku-13534", size: 12, inStock: true},
  ]
}

describe('() SizePicker', () => {
  const createSizePicker = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<SizePicker {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createSizePicker())
    .toMatchSnapshot()
  })

  test('renders out proper amount of radio buttons', () => {
    expect(createSizePicker().find(SquareRadioButton).length).toEqual(defaultProps.variants.length)
  })

  test('current size is being selected', () => {
    expect(
      createSizePicker()
      .find({ selected: true })
      .first()
      .prop('input')
      .value
    ).toEqual(defaultProps.currentSize)
  })
})