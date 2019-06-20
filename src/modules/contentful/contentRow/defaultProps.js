import { toutDefaultProps } from 'SRC/modules/contentful/touts/defaultProps'
// import { default as responsiveVideoProps } from 'SRC/modules/contentful/responsive/video/defaultProps'

export default {
  sys: {
    id: 'example-content-row'
  },
  fields: {
    layout: 'Full Bleed',
    entryElements: [
      ...toutDefaultProps
    ]
  }
}
