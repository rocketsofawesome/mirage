import React from 'react'
import 'jest-styled-components'

import Serif from './Serif'

const { shallowWithTheme } = global

describe('(Styled Component) Serif', () => {
  const createSerif = (props) => {
    return shallowWithTheme(<Serif {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createSerif())
    .toMatchSnapshot()
  })
})
