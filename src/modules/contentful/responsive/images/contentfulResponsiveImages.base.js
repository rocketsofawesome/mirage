import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ContentfulRenderer, InlineImage } from 'SRC'

export default class ContentfulResponsiveImages extends Component {
  render () {
    const {
      children,
      className,
      fields: { defaultImage, mobileImage }
    } = this.props
    if (mobileImage) {
      return (
        <div className={className}>
          <picture>
            <source srcset={defaultImage.fields.file.url} media="(min-width: 800px)" />
            <InlineImage src={mobileImage.fields.file.url}/>
          </picture>
          {children}
        </div>
      )
    } else if (defaultImage) {
      return (
        <div className={className}>
          <ContentfulRenderer {...defaultImage} />
          {children}
        </div>
      )
    }
    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}

ContentfulResponsiveImages.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fields: PropTypes.shape({
    defaultImage: PropTypes.object,
    mobileImage: PropTypes.object
  })
}
