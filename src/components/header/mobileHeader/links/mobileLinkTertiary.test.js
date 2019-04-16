import React from 'react'
import 'jest-styled-components'

import { MobileLinkTertiary } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) MobileLinkTertiary', () => {
  const createMobileLinkTertiary = (props) => {
    return shallowWithTheme(<MobileLinkTertiary {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMobileLinkTertiary())
    .toMatchSnapshot()
  })
})
