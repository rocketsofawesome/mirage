import React from 'react'
import 'jest-styled-components'

import { GrayAIcon } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) GrayAIcon', () => {
  const createGrayAIcon = (props) => {
    return mountWithTheme(<GrayAIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createGrayAIcon())
    .toMatchSnapshot()
  })
})
