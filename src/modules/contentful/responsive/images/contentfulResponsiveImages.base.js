import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import { ContentfulRenderer } from 'SRC'

export default class ContentfulResponsiveImages extends Component {
  constructor (props) {
    super(props)
    this.container = React.createRef()
  }

  componentDidMount () {
    const node = this.container.current
    if (node) {
      const { fields: { defaultImage, mobileImage }, theme } = this.props
      let currentImage = null
      if ((window.innerWidth <= theme.breakpoints.belowTabletMax) && mobileImage ) {
        currentImage = mobileImage
      } else {
        currentImage = defaultImage
      }
      const {
        height: imageHeight,
        width: imageWidth
      } = currentImage.fields.file.details.image
      const elementWidth = node.offsetWidth
      const adjustedHeight = elementWidth * imageHeight / imageWidth
      node.style = `min-height: ${adjustedHeight}px`
    }
  }

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
        <div ref={this.container} className={className}>
          <MediaQuery
            query={theme.breakpoints.belowTabletMax}
            values={mediaQueryValues}>
            <ContentfulRenderer {...mobileImage} />
          </MediaQuery>
          <MediaQuery
            query={theme.breakpoints.aboveTabletMax}
            values={mediaQueryValues}>
            <ContentfulRenderer {...defaultImage} />
          </MediaQuery>
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
