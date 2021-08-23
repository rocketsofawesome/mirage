import React from 'react'
import 'jest-styled-components'

import { RectangularRadioButton } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) RectangularRadio', () => {
  const createRectangularRadio = (props) => {
    return shallowWithTheme(<RectangularRadioButton name='gender' value='boys' />)
  }
  test('matching the snapshot', () => {
    expect(createRectangularRadio())
    .toMatchSnapshot()
  })
})
