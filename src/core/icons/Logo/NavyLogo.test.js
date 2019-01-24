import React from 'react'
import 'jest-styled-components'

import { NavyLogo } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) NavyLogo', () => {
  const createNavyLogo = (props) => {
    return mountWithTheme(<NavyLogo {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createNavyLogo())
    .toMatchSnapshot()
  })
})
