import React from 'react'
import 'jest-styled-components'

import WhiteHr from './WhiteHr'

const { shallowWithTheme } = global

describe('(Styled Component) WhiteHr', () => {
  const createWhiteHr = (props) => {
    return shallowWithTheme(<WhiteHr {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createWhiteHr())
    .toMatchSnapshot()
  })
})
