import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { BlueBorderButton } from 'SRC'
import {
  defaultStyle,
  disabledOrLoading,
  selected
} from './BlueBorderButton'

const { mountWithTheme } = global

describe('(Styled Componenet) BlueBorderButton', () => {
  const createBlueBorderButton = (props) => {
    return mountWithTheme(
      <BlueBorderButton {...props} />
    )
  }

  test('matching the snapshot', () => {
    expect(createBlueBorderButton())
    .toMatchSnapshot()
  })

  test('rendering the button normally', () => {
    expect(createBlueBorderButton())
    .toHaveStyleRule({
      modifier: css`${defaultStyle}`,
    })
  })

  test('disabling the button', () => {
    expect(createBlueBorderButton({disabled: true}))
    .toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  test('setting the button to be loading', () => {
    expect(createBlueBorderButton({loading: true}))
    .toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  test('selecting the button', () => {
    expect(createBlueBorderButton({selected: true}))
    .toHaveStyleRule({
      modifier: css`${selected}`,
    })
  })
})
