import React from 'react'
import 'jest-styled-components'

import BlueSpinner from './BlueSpinner'

const { mountWithTheme } = global

describe('(Styled Component) BlueSpinner', () => {
  const createBlueSpinner = (props) => {
    return mountWithTheme(<BlueSpinner {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBlueSpinner())
    .toMatchSnapshot()
  })
})
