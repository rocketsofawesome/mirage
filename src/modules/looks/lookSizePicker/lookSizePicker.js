import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SizePicker, InlineImage, Label } from 'SRC'

const LookProductImage = ({product}) => (
  <InlineImage
    {...product.image} />
)

const LookSizePicker = styled(({
  className,
  currentSizes,
  element,
  products,
  onSizeSelect,
  renderProductLink
}) => {
  return (
    <div className={className}>
      <Label>Sizes:</Label>
      {Object.keys(products).map((size) => {
        const product = products[size]
        const currentSize = currentSizes && (product.id in currentSizes) ? currentSizes[product.id] : undefined

        return (
          <div className='product' key={product.id}>
            {renderProductLink(product)}
            <SizePicker
              className='size-picker'
              productId={product.id}
              variants={product.variants}
              currentSize={currentSize}
              onSizeSelect={onSizeSelect(product.id)} />
          </div>
        )
      })}
    </div>
  )
})`
  .image-wrapper {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-right: 1.25rem;
    max-width: 25%;
    ${props => props.theme.breakpointsVerbose.belowTablet`
      margin-right: .75rem;
      width: auto;
    `}
  }
  ${Label} {
    margin-bottom: 2rem;
    display: flex;
  }
  .size-picker {
    min-width: 30rem;
  }
  .product {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-items: center;
    ${props => props.theme.breakpointsVerbose.belowLaptop`
      padding-bottom: 2rem;
      border-bottom: 1px solid ${props.theme.colors.gray[4]}
      &:last-of-type {
        border-bottom: none;
      }
    `}

  }
`

LookSizePicker.propTypes = {
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

LookSizePicker.defaultProps = {
  renderProductLink: (product) => (
    <a href={`#products/${product.slug}`}>
      <LookProductImage product={product} />
    </a>
  )
}

/** @component */
export default LookSizePicker
