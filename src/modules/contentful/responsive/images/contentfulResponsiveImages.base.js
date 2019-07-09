import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import { ContentfulRenderer } from 'SRC'

export default class ContentfulResponsiveImages extends Component {
  constructor (props) {
    super(props)
    this.container = React.createRef()
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
