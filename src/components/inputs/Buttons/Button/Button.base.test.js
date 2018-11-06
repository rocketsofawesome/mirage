import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import BaseButton, { CustomButton } from './Button.base'
import { GraySpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'

const { shallowWithTheme } = global

const text = 'Example'

describe('(Base Component) BaseButton', () => {
  const createBaseButton = (props) => {
    return shallowWithTheme(
      <BaseButton
        spinner={GraySpinner}
        checkmark={WhiteCheckmark}
        {...props}>
        Example
      </BaseButton>
    )
  }
  test('matching the snapshot', () => {
    const component = createBaseButton()
    expect(component).toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '2.2rem'
    const component = createBaseButton({width: width})
    expect(component).toHaveStyleRule({
      width: width
    })
  })

  test('setting text case', () => {
    const component = createBaseButton({sentanceCase: true})
    expect(component).toHaveStyleRule({
      'text-transform': 'inherit'
    })
  })

  describe('when hovering', () => {
    test('setting cursor to pointer by default', () => {
      const component = createBaseButton()
      expect(component).toHaveStyleRule({
        'cursor': 'pointer'
      })
    })
    test('not having pointer cursor when loading', () => {
      const component = createBaseButton({loading: true})
      expect(component).toHaveStyleRule('cursor', undefined)
    })
    test('not having pointer cursor when loading', () => {
      const component = createBaseButton({selected: true, loading: false})
      expect(component).toHaveStyleRule('cursor', undefined)
    })
    test('setting font family', () => {
      const component = createBaseButton()
      expect(component).toHaveStyleRule({
        'font-family': theme.fonts.primaryFont
      })
    })
  })
})

describe('(Component) CustomButton', () => {
  const createCustomButton = (props) => {
    let children = 'Example'
    if (props && props.children) {
      children = props.children
    }
    return shallow(
      <CustomButton
        theme={theme}
        checkmark={WhiteCheckmark}
        spinner={GraySpinner}
        {...props}>
        {children}
      </CustomButton>
    )
  }
  test('matching the snapshot', () => {
    const component =  createCustomButton()
    expect(component).toMatchSnapshot()
  })

  test('setting the button text', () => {
    const text = 'Test'
    const component =  createCustomButton({children: text})
    expect(component.text()).toEqual(text)
  })

  describe('setting the selected prop', () => {
    test('not rendering the checkmark if showCheckmark is not set', () => {
      const component = createCustomButton({selected: true})
      expect(component.find(WhiteCheckmark).length).toEqual(0)
    })
    test('rendering the selected checkmark', () => {
      const component = createCustomButton({
        selected: true,
        showCheckmark: true
      })
      expect(component.find(WhiteCheckmark).length).toEqual(1)
  })
})

  test('rendering the spinner when the loading prop is set', () => {
    const component = createCustomButton()
    expect(component.find(GraySpinner).length).toEqual(0)
    component.setProps({loading: true})
    expect(component.find(GraySpinner).length).toEqual(1)
  })
})
