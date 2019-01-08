import React from 'react'
import 'jest-styled-components'

import Logo from './Logo'

const { mountWithTheme } = global

describe('(Styled Component) Logo', () => {
  const createLogo = (props) => {
    return mountWithTheme(<Logo {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createLogo())
    .toMatchSnapshot()
  })
})
