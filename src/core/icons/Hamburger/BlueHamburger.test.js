import React from 'react'
import 'jest-styled-components'

import { BlueHamburger } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) BlueHamburger', () => {
  const createBlueHamburge = (props) => {
    return mountWithTheme(<BlueHamburger {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBlueHamburge())
    .toMatchSnapshot()
  })
})
