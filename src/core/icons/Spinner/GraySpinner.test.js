import React from 'react'
import 'jest-styled-components'

import { GraySpinner } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) GraySpinner', () => {
  const createGraySpinner = (props) => {
    return mountWithTheme(<GraySpinner {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createGraySpinner())
    .toMatchSnapshot()
  })
})
