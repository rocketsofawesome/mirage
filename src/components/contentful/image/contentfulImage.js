import React from 'react'
import PropTypes from 'prop-types'
import { InlineImage } from 'SRC'
const ContentfulImage = ({className, fields: {description, file: {url}}}) => {
  return (<InlineImage className={className} alt={description} src={url} />)
}
ContentfulImage.propTypes = {
  fields: PropTypes.shape({
    description: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string
    })
  })
}
/** @component */
export default ContentfulImage
