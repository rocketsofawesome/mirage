import React from 'react'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import BlueCheckmark from './BlueCheckmark'

const { mountWithTheme } = global

describe('(Component) BlueCheckmark', () => {
  const createBlueCheckmark = (props) => {
    return mountWithTheme(<BlueCheckmark {...props} />)
  }
  test('matching the snapshot', () => {
    const component = createBlueCheckmark()
    expect(component).toMatchSnapshot()
  })

  test('setting the stroke', () => {
    const component = createBlueCheckmark()
    expect(component).toHaveStyleRule({
      stroke: theme.colors.rocketBlue
    })
  })
})
