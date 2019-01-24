import React from 'react'
import 'jest-styled-components'

import { P } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) P', () => {
  const createP = (props) => {
    return shallowWithTheme(<P {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createP())
    .toMatchSnapshot()
  })
})
