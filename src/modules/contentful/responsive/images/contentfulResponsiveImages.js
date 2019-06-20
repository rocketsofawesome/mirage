import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import MediaQuery from 'react-responsive'

import { ContentfulRenderer } from 'SRC'

const ContentfulResponsiveImages = styled(({
  children,
  className,
  fields: { defaultImage, mobileImage },
  mediaQueryValues,
  theme
}) => {
  if (mobileImage) {
    return (
      <div className={className}>
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
})`
  img, video {
    width: 100%;
  }
`

ContentfulResponsiveImages.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fields: PropTypes.shape({
    defaultImage: PropTypes.object,
    mobileImage: PropTypes.object
  }),
  theme: PropTypes.object
}

ContentfulResponsiveImages.defaultProps = {
  fields: {
    defaultImage: undefined,
    mobileImage: undefined
  }
}

/** @component */
export default withTheme(ContentfulResponsiveImages)
