import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SizePicker, InlineImage, Label } from 'SRC'

const LookSizePicker = styled(({className, products}) => {
  return (
    <div className={className}>
      <Label>Sizes:</Label>
      {products.map((product) => {
        return(
          <div className='product' key={product.id}>
            <InlineImage
              className='image'
              {...product.image} />
            <SizePicker
              name={product.id}
              sizes={product.sizes} />
          </div>
          )
      })}
    </div>
  )
})`
  ${Label} {
    margin-bottom: 2rem;
    display: flex;
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
    .image {
      width: auto
      margin-right: 1.25rem;
      ${props => props.theme.breakpointsVerbose.belowTablet`
        margin-right: .75rem;
        width: 25%;
      `}
    }
    ${SizePicker} {
      transform: translateY(-.75rem);
    }
  }
`

LookSizePicker.propTypes = {
  products: PropTypes.array.isRequired,
  className: PropTypes.string
}

/** @component */
export default LookSizePicker
