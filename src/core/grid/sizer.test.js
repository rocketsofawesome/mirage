import React from 'react'
import 'jest-styled-components'

import { Sizer } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) Sizer', () => {
  const createSizer = (props) => {
    return shallowWithTheme(<Sizer {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createSizer())
    .toMatchSnapshot()
  })

  test('grid-column-end should be set', () => {
    expect(createSizer({desktop: {width: 4}}))
    .toHaveStyleRule({'grid-column-end': 'span 4'})
  })
})
