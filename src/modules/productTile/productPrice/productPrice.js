import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P, formatPrice, theme } from 'SRC'

const Text = styled(P)`
  font-weight: 500;
  font-size: 14px;
`;

const formatSalePrice = (price) => {
  const decimalPlaces = parseInt(price, 10) === parseFloat(price) ? 0 : 2
  return formatPrice(price, "$", decimalPlaces)
}

const BaseProductPrice = ({ colorway, className }) => {
  const originalPrice = colorway.skus[0].original_price
  const price = colorway.skus[0].price
  const onSale = originalPrice && originalPrice !== 0 && price < originalPrice
  const promoPrice = parseFloat(price) * 0.8

  let pricingLine = <Text>{formatPrice(price)}</Text>

  if (onSale) {
    pricingLine = (
      <Text>
        {formatSalePrice(price)}
        <span className="original-price">{formatPrice(originalPrice)}</span>
      </Text>
    )
  }

  return (
    <div className={className}>
      {pricingLine}
      <Text style={{backgroundColor: theme.colors.yellow}}>
        {formatPrice(promoPrice)} with 4+ items
      </Text>
    </div>
  )
}

const ProductPrice = styled(BaseProductPrice)`
  .original-price {
    font-weight: normal;
    color: #6d7278;
    margin-left: 8px;
    text-decoration: line-through;
  }
`

BaseProductPrice.propTypes = {
  colorway: PropTypes.object,
  className: PropTypes.string
}

/** @component */
export default ProductPrice
