import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import accounting from 'accounting'
import { H1, PriceWithDiscount } from 'SRC'

const EvergreenPromo = styled.span`
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;

  ${props => !props.quickView && props.theme.breakpointsVerbose.abovePhoneMax`
    display: inline-block;
    margin-top: 0;
  `}
`

const Highlighter = styled.span`
  background-color: ${props => props.theme.colors.yellow};
`

const Spacer = styled.span`
  display: none;
  margin: 0 5px;

  ${props => !props.quickView && props.theme.breakpointsVerbose.abovePhoneMax`
    display: inline-block;
  `}
`

const Pricing = styled.div`
  font-family: ${props => props.theme.fonts.headerFont};
  line-height: 1.13;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.navyBlue};
  font-size: 18px;

  ${props => props.theme.breakpointsVerbose.aboveTablet`
    font-size: 20px;
  `}
`

const formatSalePrice = (price) => {
  const reducedPrice = price * 0.75
  const decimalPlaces = parseInt(reducedPrice, 10) === parseFloat(reducedPrice) ? 0 : 2
  return accounting.formatMoney(reducedPrice, "$", decimalPlaces)
}

const ProductTitle = ({
  productName,
  currentVariant,
  quickView,
  className
}) => {
  const originalPrice = currentVariant.original_price
  const price = currentVariant.price
  const onSale = originalPrice && price < originalPrice

  if (currentVariant) {
    return (
      <div>
        <H1
          margin='0 0 0.5rem'
          letterSpacing='0.05rem'
          fontSizes={{ desktop: '3.2rem', mobile: '2.4rem' }}
          lineHeights={{ desktop: 1.0625, mobile: 1.0625 }}
        >
          {productName}
        </H1>
        <Pricing>
          <PriceWithDiscount
            price={price}
            originalPrice={originalPrice}
            discountPercent={currentVariant.discount_percent}
            kind='header'
          />
          <Spacer quickView={quickView}>{`//`}</Spacer>
          <EvergreenPromo quickView={quickView}>
            <Highlighter>
              {onSale ? formatSalePrice(price) : accounting.formatMoney(price * 0.75)} when you buy 6+ items
            </Highlighter>
          </EvergreenPromo>
        </Pricing>
      </div>
    )
  }
  return null
}

ProductTitle.propTypes = {
  productName: PropTypes.string,
  currentVariant: PropTypes.object,
  displayReviews: PropTypes.bool,
  className: PropTypes.string
}

export default ProductTitle
