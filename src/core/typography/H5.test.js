import React from 'react'
import 'jest-styled-components'

import { H5 } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) H5', () => {
  const createH5 = (props) => {
    return shallowWithTheme(<H5 {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createH5())
    .toMatchSnapshot()
  })
})
