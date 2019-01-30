import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { PressQuotes } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) PressQuotes', () => {
  const createPressQuotes = (props) => {
    return shallowWithTheme(<PressQuotes {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createPressQuotes())
    .toMatchSnapshot()
  })
})
