import React from 'react'
import 'jest-styled-components'

import { ContentfulResponsiveImages } from 'SRC'

import { default as defaultProps } from './defaultProps'

const { mountWithTheme } = global

describe('(Styled Component) ContentfulResponsiveImages', () => {
  const createContentfulResponsiveImages = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulResponsiveImages {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulResponsiveImages())
    .toMatchSnapshot()
  })

  test('render out children', () => {
    expect(
      createContentfulResponsiveImages()
      .find('h1')
      .length
    ).toEqual(1)
  })
})
