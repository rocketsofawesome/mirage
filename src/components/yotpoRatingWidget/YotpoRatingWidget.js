import React from 'react'
import PropTypes from 'prop-types'

const YotpoRatingWidget = ({ displayReviews, colorwayCode, productName, productDescription }) => {
  if (!displayReviews) {
    return null
  }

  return (
    <div
      style={{ marginBottom: '5px', marginTop: '1rem', minHeight: '18px' }}
      className="yotpo bottomLine"
      data-domain="rocketsofawesome.com"
      data-product-id={colorwayCode}
      data-name={productName}
      data-description={productDescription}
      data-bread-crumbs="Product categories"
    />
  )
}

YotpoRatingWidget.propTypes = {
  colorwayCode: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  displayReviews: PropTypes.bool
}

/** @component */
export default YotpoRatingWidget
