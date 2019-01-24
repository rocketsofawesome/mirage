import React from 'react'
import 'jest-styled-components'

import { BlueHr } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) BlueHr', () => {
  const createBlueHr = (props) => {
    return shallowWithTheme(<BlueHr {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBlueHr())
    .toMatchSnapshot()
  })
})
