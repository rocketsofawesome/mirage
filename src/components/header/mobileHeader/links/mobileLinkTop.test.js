import React from 'react'
import 'jest-styled-components'

import { MobileLinkTop } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) MobileLinkTop', () => {
  const createMobileLinkTop = (props) => {
    return shallowWithTheme(<MobileLinkTop {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMobileLinkTop())
    .toMatchSnapshot()
  })
})
