import React from 'react'
import { defaultProps as imageProps } from 'SRC/components/contentful/image/defaultProps'

const defaultProps = {
  children: <h1>Example</h1>,
  fields: {
    defaultImage: {
      ...imageProps
    },
    mobileImage: {
      ...imageProps
    }
  },
  sys:{
    contentType: {
      sys: {
        id: 'responsiveImage'
      }
    }
  }
}

export default defaultProps
