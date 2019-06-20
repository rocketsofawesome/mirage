import { default as defaultImageProps } from 'SRC/components/contentful/image/defaultProps'
import { default as defaultVideoProps } from 'SRC/components/contentful/video/defaultProps'

export default {
  sys: {
    id: 'example-responsive-video',
    contentType: {
      sys: {
        id: 'contentRow'
      }
    }
  },
  fields: {
    desktopFallbackImage: {
      ...defaultImageProps
    },
    mobileFallbackImage: {
      ...defaultImageProps
    },
    sources: [
      defaultVideoProps
    ],
    mobileSources: [
      defaultVideoProps
    ]
  }
}
