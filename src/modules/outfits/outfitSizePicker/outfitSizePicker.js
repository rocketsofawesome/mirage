import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import accounting from 'accounting'

import { SizePicker, InlineImage, Label, P } from 'SRC'

const OutfitProductImage = ({product}) => (
  <InlineImage
    {...product.image} />
)

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

const OutfitSizePicker = styled(({
  className,
  currentSizes,
  element,
  products,
  onSizeSelect,
  renderProductLink
}) => {
  return (
    <div className={className}>
      {Object.keys(products).map((size) => {
        const product = products[size]
        const currentSize = currentSizes && (product.id in currentSizes) ? currentSizes[product.id] : undefined
        const originalPrice = product.original_price
        const onSale = product.on_sale
        const discountPercent = product.discount_percent
        return (
          <div className='roa-product' key={product.id}>
            <div className='roa-image-wrapper'>
              {renderProductLink(product)}
            </div>
            <div className='roa-price-size-box'>
              <P className='text'>
                {onSale ?
                  <span>
                    {accounting.formatMoney(product.price)}
                    <Price>{accounting.formatMoney(originalPrice)}</Price>
                    <Discount>{parseInt(discountPercent)}% Off</Discount>
                  </span>
                  :
                  accounting.formatMoney(product.price)
                }
                <span className='promo-text'>
                  <span className='forward-slash'>{'//'}</span>
                  <span className='highlighted-text'>{accounting.formatMoney(product.price * 0.8)} when you buy 4+ items</span>
                </span>
              </P>
              <SizePicker
                productId={product.id}
                variants={product.variants}
                currentSize={currentSize}
                inputDisabled
                onSizeSelect={onSizeSelect(product.id)} />
            </div>
          </div>
        )
      })}
    </div>
  )
})`
  .roa-image-wrapper {
    margin-top: 1.5rem;
    margin-left: 1rem;
    width: 20%;
    flex: 0 0 auto;
    a {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
  ${Label} {
    margin-bottom: 2rem;
    display: flex;
  }
  .roa-price-size-box {
    flex-direction: column;
    width: 80%;
    flex: 0 0 auto;
  }
  .roa-item-price {
    margin-left: 1rem;
    margin-bottom: 0rem;
    margin-top: 1.5rem;
  }
  .roa-product {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-items: flex-start;
    ${props => props.theme.breakpointsVerbose.belowLaptop`
      padding-bottom: 2rem;
      border-bottom: 1px solid ${props.theme.colors.gray[4]}

      > *:first-child {
        margin-right: auto;
      }
      &:last-of-type {
        border-bottom: none;
      }
    `}
  }
  .text {
    font-weight: 500;
    font-size: 1.4rem;
    margin-left: 7.5px;
    margin-top: 15px;
  }
  .original-price {
    color: #6d7278;
    text-decoration: line-through;
    margin-left: 8px;
  }
  .promo-text {
    ${props => props.theme.breakpointsVerbose.belowTablet`
      margin-left: 0px;
    `}
    margin-left: 8px;
  }
  .forward-slash {
    ${props => props.theme.breakpointsVerbose.belowTablet`
      display: none;
    `}
  }
  .highlighted-text {
    background-color: #f0ff02;
    margin-left: 8px;
    ${props => props.theme.breakpointsVerbose.belowTablet`
      margin-left: 0px;
      :before
        { content: ' ';
          display: block;
        }
    `}
  }
`

OutfitSizePicker.propTypes = {
  element: PropTypes.shape({
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func
    ]),
    props: PropTypes.object
  }),
  products: PropTypes.array.isRequired,
  className: PropTypes.string
}

OutfitSizePicker.defaultProps = {
  renderProductLink: (product) => (
    <a href={`#products/${product.slug}`}>
      <OutfitProductImage product={product} />
    </a>
  )
}

/** @component */
export default OutfitSizePicker
