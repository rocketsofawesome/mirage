import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import ImageButton, { CustomButton, setWidth } from './ImageButton.base'

const { shallowWithTheme } = global

describe('(Styled Component) ImageButton', () => {
  const createImageButton = (props) => {
    return shallowWithTheme(<ImageButton {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createImageButton())
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '45rem'
    expect(createImageButton({width: width}))
    .toHaveStyleRule({
      width: css`${setWidth}`
    })
  })

  test('setting text to sentanceCase', () => {
    expect(createImageButton({sentanceCase: true}))
    .toHaveStyleRule({
      'text-transform': 'inherit'
    })
  })
})


describe('(Component) CustomButton', () => {
  const createCustomButton = (props) => {
    return shallowWithTheme(<CustomButton {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createCustomButton())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createCustomButton({className: className})
      .prop('className')
    ).toEqual(className)
  })

  test('setting the text of the button', () => {
    const text = 'Example Button'
    expect(
      createCustomButton({children: text})
      .find('button').text()
    ).toEqual(text)
  })

  test('setting the arrow prop', () => {
    expect(
      createCustomButton({arrow: true})
      .find('.arrow').length
    ).toEqual(1)
  })
})
