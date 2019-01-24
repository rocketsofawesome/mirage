import React from 'react'
import 'jest-styled-components'


import { ImageButtonBlack } from 'SRC'

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
