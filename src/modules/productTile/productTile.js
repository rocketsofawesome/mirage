import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Label, ROASlider, formatPrice } from 'SRC'


const ProductTile = styled(({className, product}) => {
  return (
    <div className={className}>
      <ROASlider images={product.images} />
      <Label>{product.title}</Label>
      <Label>{formatPrice(product.price)}</Label>
    </div>
  )
})`
  display: flex;
  flex-wrap: wrap;
  ${ROASlider} {
    width: 100%;
    margin-bottom: 1rem;
  }
  ${Label} {
    flex: 1 1 100%;
  }
`

ProductTile.propTypes = {

}

/** @component */
export default ProductTile
