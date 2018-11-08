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

describe('(Styled Component) BaseButton', () => {
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
    expect(createBaseButton())
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '2.2rem'
    expect(createBaseButton({width: width}))
    .toHaveStyleRule({
      width: width
    })
  })

  test('setting text case', () => {
    expect(createBaseButton({sentanceCase: true}))
    .toHaveStyleRule({
      'text-transform': 'inherit'
    })
  })

  describe('when hovering', () => {
    test('setting cursor to pointer by default', () => {
      expect(createBaseButton())
      .toHaveStyleRule({
        'cursor': 'pointer'
      })
    })

    test('not having pointer cursor when loading', () => {
      expect(createBaseButton({loading: true}))
      .toHaveStyleRule('cursor', undefined)
    })

    test('not having pointer cursor when loading', () => {
      expect(createBaseButton({selected: true, loading: false}))
      .toHaveStyleRule('cursor', undefined)
    })

    test('setting font family', () => {
      expect(createBaseButton())
      .toHaveStyleRule({
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
    expect(createCustomButton())
    .toMatchSnapshot()
  })

  test('setting the button text', () => {
    const text = 'Test'
    expect(
      createCustomButton({children: text}).text()
    )
    .toEqual(text)
  })

  describe('setting the selected prop', () => {
    test('not rendering the checkmark if showCheckmark is not set', () => {
      expect(
        createCustomButton({selected: true})
        .find(WhiteCheckmark).length
      )
      .toEqual(0)
    })
    test('rendering the selected checkmark', () => {
      expect(
        createCustomButton({
          selected: true,
          showCheckmark: true
        })
        .find(WhiteCheckmark).length
      )
      .toEqual(1)
  })
})

  test('rendering the spinner when the loading prop is set', () => {
    expect(
      createCustomButton()
      .find(GraySpinner).length
    )
    .toEqual(0)

    expect(
      createCustomButton({loading: true})
      .find(GraySpinner).length
    )
    .toEqual(1)
  })
})
