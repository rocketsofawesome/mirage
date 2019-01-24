import React from 'react'
import 'jest-styled-components'

import { Hr }  from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) Hr', () => {
  const createHr = (props) => {
    return shallowWithTheme(<Hr {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createHr())
    .toMatchSnapshot()
  })
})
