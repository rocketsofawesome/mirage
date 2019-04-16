import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { MobileNavigation } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) MobileNavigation', () => {
  const createMobileNavigation = (props) => {
    return shallowWithTheme(<MobileNavigation {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMobileNavigation())
    .toMatchSnapshot()
  })
})
