import React from 'react'
import 'jest-styled-components'

import NavySpinner from './NavySpinner'

const { mountWithTheme } = global

describe('(Styled Component) NavySpinner', () => {
  const createNavySpinner = (props) => {
    return mountWithTheme(<NavySpinner {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createNavySpinner())
    .toMatchSnapshot()
  })
})
