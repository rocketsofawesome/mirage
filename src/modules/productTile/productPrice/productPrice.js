import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P, formatPrice, PriceWithDiscount } from 'SRC'

const Text = styled(P)`
  font-weight: 500;
  font-size: 14px;
`;

const HighlightedText = styled.span`
  background-color: ${props => props.theme.colors.yellow}
`

const ProductPrice = ({
  colorway,
  className,
  evergreenPromoItemCount,
  evergreenPromoPercent
}) => {
  const sku = colorway.skus[0]
  const percent = (100 - parseInt(evergreenPromoPercent, 10)) / 100
  const promoPrice = parseFloat(sku.price) * percent

  return (
    <div className={className}>
      <PriceWithDiscount
        originalPrice={sku.original_price}
        discountPercent={sku.discount_percent}
        price={sku.price}
      />
      <Text>
        <HighlightedText>{formatPrice(promoPrice)} with {evergreenPromoItemCount}+ items</HighlightedText>
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
