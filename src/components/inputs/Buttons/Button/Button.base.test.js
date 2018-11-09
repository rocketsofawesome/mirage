import React from 'react'
import 'jest-styled-components'
import { css } from 'styled-components'

import BaseButton, {
  buttonPropCheck,
  CustomButton,
  notAllowedCursor,
  pointerCursor,
  setWidth,
  waitCursor
} from './Button.base'
import { GraySpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'

const { mountWithTheme } = global

describe('(Styled Component) BaseButton', () => {
  const createBaseButton = (props) => {
    return mountWithTheme(
      <BaseButton
        spinner={GraySpinner}
        checkmark={WhiteCheckmark}
        {...props} />
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
      modifier: css`${setWidth}`
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
        modifier: css`${pointerCursor}`
      })
    })

    test('not having pointer cursor when loading', () => {
      expect(createBaseButton({loading: true}))
      .toHaveStyleRule({
        modifier: css`${waitCursor}`
      })
    })

    test('not having pointer cursor when loading', () => {
      expect(createBaseButton({selected: true, loading: false}))
      .toHaveStyleRule({
        modifier: css`${pointerCursor}`
      })
    })

    test('having not-available cursor when disabled', () => {
      expect(createBaseButton({disabled: true}))
      .toHaveStyleRule({
        modifier: css`${notAllowedCursor}`
      })
    })
  })
})

describe('(Component) CustomButton', () => {
  const createCustomButton = (props) => {
    return mountWithTheme(
      <CustomButton
        spinner={GraySpinner}
        checkmark={WhiteCheckmark}
        {...props} />
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
      const component = createCustomButton({
        selected: true,
        showCheckmark: true
      })
      expect(
        component
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

describe('(Custom PropType Check) buttonPropCheck', () => {
  test('returns error if both disabled and loading props are set', () => {
    expect(
      buttonPropCheck(
        {
        disabled: true,
        loading: true
        },
        '',
        'CustomComponent'
      )
    ).toEqual(Error(`You have both the disabled and loading props set in CustomComponent, please only set one or neither of these props at a time.`))
  })

  test('returns null if both the disabled and loading props are not set', () => {
    expect(
      buttonPropCheck(
        {},
        '',
        'CustomComponent'
      )
    ).toBeNull()
  })
})
