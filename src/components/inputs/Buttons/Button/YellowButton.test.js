import React from 'react'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import YellowButton from './YellowButton'

const { mountWithTheme } = global

describe('(Styled Component) YellowButton', () => {
  const createYellowButton = (props) => {
    return mountWithTheme(<YellowButton {...props} />)
  }
  test('matching the snapshot', () => {
    expect(createYellowButton())
    .toMatchSnapshot()
  })

  test('setting the color', () => {
    expect(createYellowButton())
    .toHaveStyleRule({
      color: theme.colors.navy
    })
  })
})
