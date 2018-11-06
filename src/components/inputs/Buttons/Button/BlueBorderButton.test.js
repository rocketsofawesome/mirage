import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import BlueBorderButton, { defaultStyle, disabledOrLoading, selected } from './BlueBorderButton'
import { WhiteSpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'

describe('(Componenet) BlueBorderButton', () => {
  const createBlueBorderButton = (props) => {
    let children = 'Example'
    if (props && props.children){
      children = props.children
    }
    return mount(
      <BlueBorderButton
        theme={theme}
        checkmark={WhiteCheckmark}
        spinner={WhiteSpinner}
        {...props}
        >
        {children}
      </BlueBorderButton>
    )
  }
  test('matching the snapshot', () => {
    const component = createBlueBorderButton()
    expect(component).toMatchSnapshot()
  })

  test('the color of the button text', () => {
    const component = createBlueBorderButton()
    expect(component).toHaveStyleRule({color: theme.colors.white})
  })

  test('rendering the button normally', () => {
    const component = createBlueBorderButton()
    expect(component).toHaveStyleRule({
      modifier: css`${defaultStyle}`,
    })
  })

  test('disabling the button', () => {
    const component = createBlueBorderButton({disabled: true})
    expect(component).toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  test('setting the button to be loading', () => {
    const component = createBlueBorderButton({loading: true})
    expect(component).toHaveStyleRule({
      modifier: css`${disabledOrLoading}`,
    })
  })

  test('selecting the button', () => {
    const component = createBlueBorderButton({selected: true})
    expect(component).toHaveStyleRule({
      modifier: css`${selected}`,
    })
  })
})
