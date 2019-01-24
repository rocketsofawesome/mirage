import React from 'react'
import 'jest-styled-components'

import { Hamburger } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) Hamburger', () => {
  const createHamburger = (props) => {
    return mountWithTheme(<Hamburger {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createHamburger())
    .toMatchSnapshot()
  })
})
