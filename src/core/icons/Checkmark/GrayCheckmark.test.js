import React from 'react'
import 'jest-styled-components'

import GrayCheckmark from './GrayCheckmark'

const { mountWithTheme } = global

describe('(Styled Component) GrayCheckmark', () => {
  const createGrayCheckmark = (props) => {
    return mountWithTheme(<GrayCheckmark {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createGrayCheckmark())
    .toMatchSnapshot()
  })
})
