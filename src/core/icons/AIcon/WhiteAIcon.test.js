import React from 'react'
import 'jest-styled-components'

import { WhiteAIcon } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) WhiteAIcon', () => {
  const createWhiteAIcon = (props) => {
    return mountWithTheme(<WhiteAIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createWhiteAIcon())
    .toMatchSnapshot()
  })
})
