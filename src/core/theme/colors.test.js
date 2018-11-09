import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import Color, { colors } from './colors'

const { shallowWithTheme } = global

describe('(Styled Component) Color', () => {
  const createColor = (props) => {
    return shallowWithTheme(<Color {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createColor())
    .toMatchSnapshot()
  })

  test('Setting the color', () => {
    expect(createColor({color: theme.colors.rocketBlue}))
    .toHaveStyleRule({
      'background-color': theme.colors.rocketBlue
    })
  })
})

describe('(Object) colors', () => {
  test('matching the snapshot', () => {
    expect(colors)
    .toMatchSnapshot()
  })
})
