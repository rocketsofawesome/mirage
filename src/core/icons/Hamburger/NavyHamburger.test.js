import React from 'react'
import 'jest-styled-components'

import NavyHamburger from './NavyHamburger'

const { mountWithTheme } = global

describe('(Styled Component) NavyHamburger', () => {
  const createNavyHamburger = (props) => {
    return mountWithTheme(<NavyHamburger {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createNavyHamburger())
    .toMatchSnapshot()
  })
})
