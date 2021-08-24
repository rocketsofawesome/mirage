import React from 'react'
import 'jest-styled-components'
import { toHaveProperty } from 'enzyme'

import { CheckboxButton } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  error: null,
  children: []
}
describe('(Styled Component) CheckboxButton', () => {
  const createCheckboxButton = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<CheckboxButton {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createCheckboxButton())
    .toMatchSnapshot()
  })

  test('renders as a square with the square prop', () => {
    expect(createCheckboxButton({shape: 'square'}).find(CheckboxButton)).toHaveStyleRule(`height: 12rem;
    width: 12rem;`)
  })

  test('renders as a rectangle with the rectangle prop', () => {
    expect(createCheckboxButton({shape: 'rectangle'}).find(CheckboxButton)).toHaveStyleRule(`height: 6.4rem;
    width: 100%;`)
  })

  test('renders as a circle with the circle prop', () => {
    expect(createCheckboxButton({shape: 'circle'}).find(CheckboxButton)).toHaveStyleRule(`height: 8rem;
    width: 8rem; border-radius: 50%`)
  })

  test('children should always render', () => {
    expect(createCheckboxButton().contains(defaultProps.children)).toBeTruthy()
  })
})
