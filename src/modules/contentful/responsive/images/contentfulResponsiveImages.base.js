import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import { ContentfulRenderer, InlineImage } from 'SRC'

export default class ContentfulResponsiveImages extends Component {
  render () {
    const {
      children,
      className,
      fields: { defaultImage, mobileImage },
      mediaQueryValues,
      theme
    } = this.props
    if (mobileImage) {
      return (
        <div className={className}>
          <InlineImage
            alt={defaultImage.fields.description}
            src={mobileImage.fields.file.url}
            srcSet={{
              '800w': defaultImage.fields.file.url,
              '100w': mobileImage.fields.file.url,
            }}
            sizes={{
              '(min-width: 800px)': '400px',
              'default': '100px'
            }}
            />
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
  }),
  mediaQueryValues: PropTypes.object,
  theme: PropTypes.object
}
