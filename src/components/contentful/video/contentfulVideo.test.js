import React from 'react'
import 'jest-styled-components'

import { ContentfulVideo } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  fields: {
    description: 'An example tag',
    file: {
      url: 'https://www.example.com/video.mp4'
    }
  }
}
describe('(Component) ContentfulVideo', () => {
  const createContentfulVideo = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulVideo {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulVideo())
    .toMatchSnapshot()
  })

  test('url gets passed as video source', () => {
    expect(
      createContentfulVideo().find('source')
      .prop('src')
    ).toEqual(defaultProps.fields.file.url)
  })
})
