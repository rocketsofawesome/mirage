import React from 'react'
import 'jest-styled-components'

import ImageButtonBlue from './ImageButtonBlue'

const { mountWithTheme } = global

describe('(Styled Component) ImageButtonBlue', () => {
  const createImageButtonBlack = (props) => {
    return mountWithTheme(<ImageButtonBlue {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createImageButtonBlack())
    .toMatchSnapshot()
  })
})
