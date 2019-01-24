import React from 'react'
import 'jest-styled-components'

import { H6 } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) H6', () => {
  const createH6 = (props) => {
    return shallowWithTheme(<H6 {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createH6())
    .toMatchSnapshot()
  })
})
