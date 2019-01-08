import React from 'react'
import 'jest-styled-components'

import GrayHamburger from './GrayHamburger'

const { mountWithTheme } = global

describe('(Styled Component) GrayHamburger', () => {
  const createGrayHamburger = (props) => {
    return mountWithTheme(<GrayHamburger {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createGrayHamburger())
    .toMatchSnapshot()
  })
})
