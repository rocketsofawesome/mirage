import React from 'react'
import 'jest-styled-components'

import { InstagramRegion, H1, P } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) InstagramRegion', () => {
  const defaultProps = {
    title: 'Example Title',
    content: 'This is the example content'
  }
  const createInstagramRegion = (props = defaultProps) => {
    return mountWithTheme(<InstagramRegion {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createInstagramRegion())
    .toMatchSnapshot()
  })

  test('rendering the title', () => {
    const title = 'Hello World'
    expect(
      createInstagramRegion({...defaultProps, title: title})
      .find(H1)
      .text()
    ).toEqual(title)
  })

  test('rendering the content', () => {
    const content = 'An updated content area'
    expect(
      createInstagramRegion({...defaultProps, content: content})
      .find(P)
      .text()
    ).toEqual(content)
  })
})
