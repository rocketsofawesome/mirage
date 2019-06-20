import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ContentfulImage } from 'SRC'
import { default as defaultProps } from './defaultProps'

const { mountWithTheme } = global


describe('(Component) ContentfulImage', () => {
  const createContentfulImage = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulImage {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulImage())
    .toMatchSnapshot()
  })

  test('description is passed to img alt attribute', () => {
    expect(
      createContentfulImage()
      .find('img')
      .prop('alt')
    ).toEqual(defaultProps.fields.description)
  })

  test('file url is passed to img src attribute', () => {
    expect(
      createContentfulImage()
      .find('img')
      .prop('src')
    ).toEqual(defaultProps.fields.file.url)
  })
})
