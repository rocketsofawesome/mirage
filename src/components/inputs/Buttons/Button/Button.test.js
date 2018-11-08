import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import Button, { defaultStyle, disabledOrLoading, selected } from './Button'
import { WhiteSpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'

const { mountWithTheme } = global

describe('(Styled Componenet) Button', () => {
  const createButton = (props) => {
    let children = 'Example'
    if (props && props.children){
      children = props.children
    }
    return mountWithTheme(
      <Button
        checkmark={WhiteCheckmark}
        spinner={WhiteSpinner}
        {...props}>
        {children}
      </Button>
    )
  }
  test('matching the snapshot', () => {
    expect(createButton())
    .toMatchSnapshot()
  })

  test('the color of the button text', () => {
    expect(createButton())
    .toHaveStyleRule({color: theme.colors.white})
  })

  test('rendering the button normally', () => {
    expect(createButton())
    .toHaveStyleRule({
      modifier: css`${defaultStyle}`,
    })
  })

  test('disabling the button', () => {
    expect(createButton({disabled: true}))
    .toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  test('setting the button to be loading', () => {
    expect(createButton({loading: true}))
    .toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  describe('selecting the button', () => {
    test('without the checkmark', () => {
      expect(createButton({selected: true}))
      .toHaveStyleRule({
        modifier: css`${selected}`,
      })
    })

    test('with the checkmark', () => {
      expect(createButton({selected: true, showCheckmark: true}))
      .toHaveStyleRule({
        modifier: css`${selected}`,
      })
    })
  })

})
