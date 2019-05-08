import React from 'react'
import 'jest-styled-components'

import { ProgressBar } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) ProgressBar', () => {
  const createProgressBar = (props) => {
    return shallowWithTheme(<ProgressBar {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createProgressBar({percentage: 10}))
    .toMatchSnapshot()
  })
})
