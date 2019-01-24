import React from 'react'
import 'jest-styled-components'

import { ImageButtonWhite } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) ImageButtonWhite', () => {
  const createImageButtonWhite = (props) => {
    return mountWithTheme(<ImageButtonWhite {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createImageButtonWhite())
    .toMatchSnapshot()
  })
})
