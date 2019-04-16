import React from 'react'
import 'jest-styled-components'

import { MobileHeader } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) MobileHeader', () => {
  const createMobileHeader = (props) => {
    return shallowWithTheme(<MobileHeader {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMobileHeader())
    .toMatchSnapshot()
  })
})
