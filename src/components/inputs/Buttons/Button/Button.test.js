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

describe('(Componenet) Button', () => {
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
    const component = createButton()
    expect(component).toMatchSnapshot()
  })

  test('the color of the button text', () => {
    const component = createButton()
    expect(component).toHaveStyleRule({color: theme.colors.white})
  })

  test('rendering the button normally', () => {
    const component = createButton()
    expect(component).toHaveStyleRule({
      modifier: css`${defaultStyle}`,
    })
  })

  test('disabling the button', () => {
    const component = createButton({disabled: true})
    expect(component).toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  test('setting the button to be loading', () => {
    const component = createButton({loading: true})
    expect(component).toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  describe('selecting the button', () => {
    test('without the checkmark', () => {
      const component = createButton({selected: true})
      expect(component).toHaveStyleRule({
        modifier: css`${selected}`,
      })
    })

    test('with the checkmark', () => {
      const component = createButton({selected: true, showCheckmark: true})
      expect(component).toHaveStyleRule({
        modifier: css`${selected}`,
      })
    })
  })

})
