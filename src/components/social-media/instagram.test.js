import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Instagram } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) Instagram', () => {
  const createInstagram = (props) => {
    return shallowWithTheme(<Instagram {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createInstagram())
    .toMatchSnapshot()
  })
})
