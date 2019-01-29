import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { BackgroundVideo } from './backgroundVideo'

const { mountWithTheme } = global

describe('(Styled Component) BackgroundVideo', () => {
  const defaultProps = {
    sources: {
      0: 'https://videos.ctfassets.net/8hhsfnb6grdi/7Iiffn2YxDIeMNqnG80As5/01aa536f3cd8ce2daa6d33b9b9c21543/ROA_Test01_Mobile.mp4',
      768: 'https://videos.ctfassets.net/8hhsfnb6grdi/4vn6I5vreD5xJGa24tBcLX/f9fa268493031b19e2610b4b4a66381d/ROA_Test01_1.mp4'
    },
    size: {
      width: 300
    },
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
    ).toEqual(defaultProps.sources[0])
  })

  test('passing children into article', () => {
    console.log(createBackgroundVideo().debug())
    expect(
      createBackgroundVideo()
      .find('article')
      .prop('children')
    ).toEqual(defaultProps.children)
  })
})
