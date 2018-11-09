import React from 'react'
import 'jest-styled-components'

import ImageButtonBlack from './ImageButtonBlack'

const { mountWithTheme } = global

describe('(Styled Component) ImageButtonBlack', () => {
  const createImageButtonBlack = (props) => {
    return mountWithTheme(<ImageButtonBlack {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createImageButtonBlack())
    .toMatchSnapshot()
  })
})
