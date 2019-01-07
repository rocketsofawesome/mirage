import React from 'react'
import 'jest-styled-components'

import Video from './Video'

const { shallowWithTheme } = global

describe('(Component) Video', () => {
  const createVideo = (props) => {
    return shallowWithTheme(<Video {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createVideo())
    .toMatchSnapshot()
  })

  describe('video source', () => {
    test('setting source to a string', () => {
      const srcString = 'https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.mp4'
      const videoComponent = createVideo({
        source: srcString
      })
      expect(videoComponent.find('source').prop('src')).toEqual(srcString)
    })

    test('setting source to an array', () => {
      const srcArray = [
        'https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.mp4',
        'https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.webm',
        'https://res.cloudinary.com/roa-canon/video/upload/v1535745827/web/ROA_BrandVideo_20180405.ogv'
      ]
      const videoComponent = createVideo({
        source: srcArray
      })
      videoComponent.find('source').forEach((node, index) => {
        expect(node.prop('src')).toEqual(srcArray[index])
      })
    })
  })
})
