import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import RichText from './RichText'
import richText from './example.json'

const { shallowRender } = global

describe('() RichText', () => {
  const createRichText = (props = {richText: richText}) => {
    return (<RichText {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createRichText())
    .toMatchSnapshot()
  })

  test('', () => {
    expect(createRichText())

  })
})
