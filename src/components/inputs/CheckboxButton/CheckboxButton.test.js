import React from 'react'
import 'jest-styled-components'

import { CheckboxButton } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  input: {}
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
})
