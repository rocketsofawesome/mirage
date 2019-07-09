import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import BaseContentfulResponsiveImages from './contentfulResponsiveImages.base'

const ContentfulResponsiveImages = styled(BaseContentfulResponsiveImages)`
  width: 100%;
  position: relative;
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
