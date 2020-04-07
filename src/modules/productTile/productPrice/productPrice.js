import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P, formatPrice } from 'SRC'

const Text = styled(P)`
  font-weight: 500;
  font-size: 14px;
`;

const Discount = styled.span`
  margin-left: 4px;
  color: ${props => props.theme.colors.rocketBlue}
`

const Price = styled.span`
  font-weight: normal;
  color: #6d7278;
  margin-left: 8px;
  text-decoration: line-through;
`

const HighlightedText = styled.span`
  background-color: ${props => props.theme.colors.yellow}
`

const formatSalePrice = (price) => {
  const decimalPlaces = parseInt(price, 10) === parseFloat(price) ? 0 : 2
  return formatPrice(price, "$", decimalPlaces)
}

const ProductPrice = ({ colorway, className }) => {
  const originalPrice = colorway.skus[0].original_price
  const price = colorway.skus[0].price
  const discountPercent = colorway.skus[0].discount_percent
  const onSale = originalPrice && originalPrice !== 0 && price < originalPrice
  const promoPrice = parseFloat(price) * 0.75

  let pricingLine = <Text>{formatPrice(price)}</Text>

  if (onSale) {
    pricingLine = (
      <Text>
        {formatSalePrice(price)}
        <Price>{formatPrice(originalPrice)}</Price>
        <Discount>{parseInt(discountPercent, 10)}% off</Discount>
      </Text>
    )
  }

  return (
    <div className={className}>
      {pricingLine}
      <Text>
        <HighlightedText>{formatPrice(promoPrice)} with 6+ items</HighlightedText>
      </Text>
    </div>
  )
}

ProductPrice.propTypes = {
  colorway: PropTypes.object,
  className: PropTypes.string
}

/** @component */
export default ProductPrice
