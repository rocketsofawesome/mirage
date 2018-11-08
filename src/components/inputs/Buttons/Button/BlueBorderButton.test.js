import React from 'react'
import renderer from 'react-test-renderer'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import BlueBorderButton, {
  defaultStyle,
  disabledOrLoading,
  selected
} from './BlueBorderButton'
import { WhiteSpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'

const { mountWithTheme } = global

describe('(Styled Componenet) BlueBorderButton', () => {
  const createBlueBorderButton = (props) => {
    let children = 'Example'
    if (props && props.children){
      children = props.children
    }
    return mountWithTheme(
      <BlueBorderButton {...props} />
    )
  }
  test('matching the snapshot', () => {
    expect(createBlueBorderButton())
    .toMatchSnapshot()
  })

  test('the color of the button text', () => {
    expect(createBlueBorderButton())
    .toHaveStyleRule({color: theme.colors.white})
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
