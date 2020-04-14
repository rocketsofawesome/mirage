import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P, formatPrice } from 'SRC'

const textFontSize = ({ kind }) => {
  const sizes = {
    tile: '14px',
    header: '20px'
  }
  return sizes[kind]
}

const textFont = ({ kind, theme }) => {
  const family = {
    tile: theme.fonts.primaryFont,
    header: theme.fonts.headerFont
  }
  return family[kind]
}

const Text = styled(P)`
  font-weight: 500;
  font-size: ${textFontSize};
  font-family: ${textFont};
  display: inline-block;
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

const formatSalePrice = (price) => {
  const decimalPlaces = parseInt(price, 10) === parseFloat(price) ? 0 : 2
  return formatPrice(price, "$", decimalPlaces)
}

const PriceWithDiscount = ({ price, originalPrice, discountPercent, kind }) => {
  const onSale = originalPrice && originalPrice !== 0 && price < originalPrice

  if (onSale) {
    return (
      <Text kind={kind}>
        {formatSalePrice(price)}
        <Price>{formatPrice(originalPrice)}</Price>
        <Discount>{parseInt(discountPercent, 10)}% off</Discount>
      </Text>
    )
  }
  return <Text kind={kind}>{formatPrice(price)}</Text>
}


PriceWithDiscount.propTypes = {
  price: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  originalPrice: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  discountPercent: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  fontSize: PropTypes.string
}

PriceWithDiscount.defaultProps = {
  kind: 'tile'
}

/** @component */
export default PriceWithDiscount
