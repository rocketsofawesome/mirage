import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import RichText from './RichText'
import * as typography from 'SRC/core/typography'
import richText from './example.json'

const { shallowWithTheme } = global

describe('() RichText', () => {
  const createRichText = (props = {richText: richText}) => {
    return shallowWithTheme(<RichText {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createRichText())
    .toMatchSnapshot()
  })

  test('recursiveRender should return fully rendered text area', () => {
    const renderable = createRichText().dive()
    console.log(renderable.debug())
    expect(renderable.find('article').length).toEqual(1)
    expect(renderable.find(typography.H1).length).toEqual(1)
    expect(renderable.find(typography.P).length).toEqual(4)
  })
})
