import React from 'react'
import PropTypes from 'prop-types'
import { Video } from 'SRC'

const ContentfulVideo = ({ className, fields: { description, file: {url} }, ...props }) => {
  return (
    <Video {...props} sources={url} />
  )
}

ContentfulVideo.propTypes = {
  fields: PropTypes.object,
  className: PropTypes.string
}

/** @component */
export default ContentfulVideo
