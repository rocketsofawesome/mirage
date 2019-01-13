import React from 'react'
import PropTypes from 'prop-types'

import Sizes from './sizes.base'
import SourceSet from './sourceSet.base'

import cloudinary from 'SRC/services/cloudinary'

const InlineImage = ({alt, src, sizes: inSizes, srcSet: inSources, ...props }) => {
    let srcSet =  undefined
    if (inSources) {
      srcSet = new SourceSet(inSources).toString()
    }
    let sizesStr = undefined
    if (inSizes) {
      sizesStr = new Sizes(inSizes).toString()
    }
    return (
      <img
        alt={alt}
        src={cloudinary.url(src)}
        srcSet={srcSet}
        sizes={sizesStr}
        {...props} />
    )
}

InlineImage.defaultProps = {
  alt: ''
}

InlineImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sizes: PropTypes.object,
  srcSet: PropTypes.oneOfType([
    (props, propName, componentName) => {
      if (props[propName] && !props['sizes']) {
        console.warn(
          `You have provided ${propName}, but not defined the sizes prop, this will cause your InlineImages for be sized to 100vw if a \`width\` css property is not set.`
        )
      }
    },
    PropTypes.object
  ])
}

/** @component */
export default InlineImage
