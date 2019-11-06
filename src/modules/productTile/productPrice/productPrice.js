import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P, formatPrice } from 'SRC'


const BaseProductPrice = ({ colorway, className }) => {
  const formatSalePrice = (price) => {
    const decimalPlaces = parseInt(price, 10) === parseFloat(price) ? 0 : 2
    return formatPrice(price, "$", decimalPlaces)
  }

  const originalPrice = colorway.skus[0].original_price
  const price = colorway.skus[0].price
  const onSale = originalPrice && originalPrice !== 0 && price < originalPrice

  if (onSale) {
    return(
      <P className={className}>
        {formatSalePrice(price)}
        <span className="original-price">({formatPrice(originalPrice)} reg)</span>
      </P>
    )
  } else {
    return(
      <P>{formatPrice(price)}</P>
    )
  }
}

const ProductPrice = styled(BaseProductPrice)`
  font-weight: 500;
  font-size: 1.65rem;

  .original-price {
    font-weight: normal;
    font-size: 1.6rem;
    color: #6d7278;
    margin-left: 8px;
  }
`

BaseProductPrice.propTypes = {
  colorway: PropTypes.object,
  className: PropTypes.string
}

/** @component */
export default ProductPrice
