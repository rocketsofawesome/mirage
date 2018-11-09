import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import BaseHr from './Hr.base'

const { shallowWithTheme } = global

describe('(Styled Component) BaseHr', () => {
  const createBaseHr = (props) => {
    return shallowWithTheme(<BaseHr {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseHr())
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '80%'
    expect(createBaseHr({width: width}))
    .toHaveStyleRule({
      width: width
    })
  })
})
