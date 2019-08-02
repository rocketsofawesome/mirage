import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { CheckboxButton } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {

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
