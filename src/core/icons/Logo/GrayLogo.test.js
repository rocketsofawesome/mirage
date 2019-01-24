import React from 'react'
import 'jest-styled-components'

import { GrayLogo } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) GrayLogo', () => {
  const createGrayLogo = (props) => {
    return mountWithTheme(<GrayLogo {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createGrayLogo())
    .toMatchSnapshot()
  })
})
