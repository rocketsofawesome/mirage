import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { WhiteBorderButton } from 'SRC'
import {
  defaultStyle,
  disabledOrLoading,
  selected
} from './WhiteBorderButton'

const { mountWithTheme } = global

describe('(Styled component) WhiteBorderButton', () => {
  const createWhiteBorderButton = (props) => {
    return mountWithTheme(<WhiteBorderButton {...props} />)
  }

  test('matching the snapshot', () => {
    const component = createWhiteBorderButton()
    expect(component).toMatchSnapshot()
  })

  test('rendering the button normally', () => {
    const component = createWhiteBorderButton()
    expect(component).toHaveStyleRule({
      modifier: css`${defaultStyle}`,
    })
  })

  test('disabling the button', () => {
    const component = createWhiteBorderButton({disabled: true})
    expect(component).toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  test('setting the button to be loading', () => {
    const component = createWhiteBorderButton({loading: true})
    expect(component).toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  test('selecting the button', () => {
    const component = createWhiteBorderButton({selected: true})
    expect(component).toHaveStyleRule({
      modifier: css`${selected}`,
    })
  })
})
