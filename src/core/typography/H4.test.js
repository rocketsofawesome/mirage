import React from 'react'
import 'jest-styled-components'

import H4 from './H4'

const { shallowWithTheme } = global

describe('(Styled Component) H4', () => {
  const createH4 = (props) => {
    return shallowWithTheme(<H4 {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createH4())
    .toMatchSnapshot()
  })
})
