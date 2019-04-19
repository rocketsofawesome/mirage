import React from 'react'
import 'jest-styled-components'
import { SquareRadioButton, SizePicker } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  name: '12345',
  currentSize: 4,
  sizes: [
    {value: 3, inStock: true},
    {value: 4, inStock: true},
    {value: 5, inStock: true},
    {value: 6, inStock: true},
    {value: 7, inStock: false},
    {value: 9, inStock: true},
    {value: 12, inStock: true},
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
    expect(createSizePicker().find(SquareRadioButton).length).toEqual(defaultProps.sizes.length)
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

  test('name is set on input', () => {
    expect(
      createSizePicker()
      .find(SquareRadioButton)
      .first()
      .prop('input')
      .name
    ).toEqual(defaultProps.name)
  })
})