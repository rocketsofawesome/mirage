import React from 'react'
import 'jest-styled-components'

import { AIcon } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) AIcon', () => {
  const createAIcon = (props) => {
    return mountWithTheme(<AIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createAIcon())
    .toMatchSnapshot()
  })
})
