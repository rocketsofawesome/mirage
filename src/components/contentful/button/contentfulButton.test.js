import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ContentfulButton, Link } from 'SRC'

import { default as defaultProps } from './defaultProps'

const { mountWithTheme } = global


describe('(Styled Component) ContentfulButton', () => {
  const createContentfulButton = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulButton {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulButton())
    .toMatchSnapshot()
  })

  test('setting the width of the button', () => {
    expect(createContentfulButton())
    .toHaveStyleRule('width', 'calc(100% - 20px)')
    expect(
      createContentfulButton({
        fields: {
          ...defaultProps.fields,
          width: 'Fit Text'
        }
      })
    )
    .toHaveStyleRule('max-width', '290px')
  })

  test('setting the button background color', () => {
    expect(createContentfulButton())
    .toHaveStyleRule('background-color', defaultProps.fields.backgroundColor)

    const newBackgroundColor = '#565656'
    expect(
      createContentfulButton({
        fields: {
          ...defaultProps.fields,
          backgroundColor: newBackgroundColor
        }
      })
    )
    .toHaveStyleRule('background-color', newBackgroundColor)
  })

  test('setting the text color', () => {
    expect(createContentfulButton())
    .toHaveStyleRule('color', defaultProps.fields.color)

    const newColor = '#565656'
    expect(
      createContentfulButton({
        fields: {
          ...defaultProps.fields,
          color: newColor
        }
      })
    )
    .toHaveStyleRule('color', newColor)

  })

  test('rendering the link', () => {
    const props = {
      ...defaultProps,
      renderLink: jest.fn().mockImplementation((inProps) => {
        const { target, children, ...props } = inProps
        return (<Link href={target} {...props}>{children}</Link>)
      })
    }
    createContentfulButton(props)
    expect(props.renderLink).toHaveBeenCalled()
  })
})
