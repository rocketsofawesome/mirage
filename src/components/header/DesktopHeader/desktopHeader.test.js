import React from 'react'
import 'jest-styled-components'

import { DesktopHeader } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled component) DesktopHeader', () => {
  const createDesktopHeader = (props) => {
    return shallowWithTheme(<DesktopHeader {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createDesktopHeader())
    .toMatchSnapshot()
  })
})
