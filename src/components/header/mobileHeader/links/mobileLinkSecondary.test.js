import React from 'react'
import 'jest-styled-components'

import { MobileLinkSecondary } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) MobileLinkSecondary', () => {
  const createMobileLinkSecondary = (props) => {
    return shallowWithTheme(<MobileLinkSecondary {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMobileLinkSecondary())
    .toMatchSnapshot()
  })
})
