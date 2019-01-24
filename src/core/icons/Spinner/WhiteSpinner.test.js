import React from 'react'
import 'jest-styled-components'

import { WhiteSpinner } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) WhiteSpinner', () => {
  const createWhiteSpinner = (props) => {
    return mountWithTheme(<WhiteSpinner {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createWhiteSpinner())
    .toMatchSnapshot()
  })
})
