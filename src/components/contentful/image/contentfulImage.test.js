import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ContentfulImage } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  fields: {
    description: 'An example tag',
    file: {
      url: 'https://www.example.com/img.jpg'
    }
  }
}
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
