import React from 'react'
import 'jest-styled-components'

import { NavyAIcon } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) NavyAIcon', () => {
  const createNavyAIcon = (props) => {
    return mountWithTheme(<NavyAIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createNavyAIcon())
    .toMatchSnapshot()
  })
})
