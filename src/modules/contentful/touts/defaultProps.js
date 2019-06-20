import { default as responsiveImageProps } from 'SRC/modules/contentful/responsive/images/defaultProps'
import { default  as assetLinkProps } from 'SRC/modules/contentful/assetLink/defaultProps'
import { default as heroButtonProps } from 'SRC/components/contentful/button/defaultProps'

const splitToutDefaultProps = {
  sys:{
    id: 'example-split-tout',
    contentType:{
      sys: {
        id: 'splitTout'
      }
    }
  },
  fields: {
    description: '# Example Description',
    imageLinks: [
      {
        ...assetLinkProps,
        key: 1
      },
      {
        ...assetLinkProps,
        key: 2
      }
    ]
  }
}

const toutDefaultProps = {
  sys:{
    id: 'example-tout',
    contentType:{
      sys: {
        id: 'tout'
      }
    }
  },
  fields: {
    backgroundColor: '#000000',
    backgroundTransparency: 0.1,
    description: '# Heading 1',
    media: {...responsiveImageProps},
    position: 'centerBottom',
    textColor: '#F0FF02',
    heroButtons: [
      ...heroButtonProps
    ]
  }
}

export { splitToutDefaultProps, toutDefaultProps }
