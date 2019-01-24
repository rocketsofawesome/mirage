import React from 'react'
import 'jest-styled-components'

import { NavyHr } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) NavyHr', () => {
  const createNavyHr = (props) => {
    return shallowWithTheme(<NavyHr {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createNavyHr())
    .toMatchSnapshot()
  })
})
