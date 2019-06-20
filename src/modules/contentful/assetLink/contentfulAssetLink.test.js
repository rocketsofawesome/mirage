import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { default as defaultProps } from './defaultProps'

import { ContentfulAssetLink, ContentfulResponsiveImages } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) ContentfulAssetLink', () => {
  const createContentfulAssetLink = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulAssetLink {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulAssetLink())
    .toMatchSnapshot()
  })

  test('link wraps responsive images', () => {
    expect(
      createContentfulAssetLink()
      .find(ContentfulResponsiveImages)
      .length
    ).toEqual(1)
  })
})
