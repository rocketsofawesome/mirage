import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import Example from './breakpointExample'

const { shallowWithTheme } = global

describe('(Style Component) Example', () => {
  const createExample = (props) => {
    return shallowWithTheme(<Example{...props} />)
  }

  test('matching the snapshot', () => {
    expect(createExample())
    .toMatchSnapshot()
  })
})
