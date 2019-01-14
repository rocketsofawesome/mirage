import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import BackgroundVideo from './BackgroundVideo'

const { mountWithTheme } = global

describe('(Styled Component) BackgroundVideo', () => {
  const defaultProps = {
    sources: 'www.example.com/example.mp4',
    children: <h1>Hello</h1>
  }
  const createBackgroundVideo = (props = defaultProps) => {
    return mountWithTheme(<BackgroundVideo {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBackgroundVideo())
    .toMatchSnapshot()
  })

  test('passing video sources to video component', () => {
    expect(
      createBackgroundVideo()
      .find('Video')
      .prop('sources')
    ).toEqual(defaultProps.sources)
  })

  test('passing children into article', () => {
    expect(
      createBackgroundVideo()
      .find('article')
      .prop('children')
    ).toEqual(defaultProps.children)
  })
})
