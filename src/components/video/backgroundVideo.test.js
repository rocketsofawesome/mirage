import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { BackgroundVideo, Video } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) BackgroundVideo', () => {
  const defaultProps = {
    sources: {
      mobile: 'https://videos.ctfassets.net/8hhsfnb6grdi/7Iiffn2YxDIeMNqnG80As5/01aa536f3cd8ce2daa6d33b9b9c21543/ROA_Test01_Mobile.mp4',
      desktop: 'https://videos.ctfassets.net/8hhsfnb6grdi/4vn6I5vreD5xJGa24tBcLX/f9fa268493031b19e2610b4b4a66381d/ROA_Test01_1.mp4'
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

  // TODO: Need to get server rendering set up:
  // https://github.com/contra/react-responsive#server-rendering
  // test('passing video sources to video component', () => {
  //
  // })

  test('passing children into article', () => {
    expect(
      createBackgroundVideo()
      .find('article')
      .prop('children')
    ).toEqual(defaultProps.children)
  })
})
