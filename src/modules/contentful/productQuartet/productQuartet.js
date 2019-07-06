import React from 'react'
import PropTypes from 'prop-types'
import { ProductTile, Quartet } from 'SRC'

const ProductQuartet = ({ className, products, ...props}) => {
  return (
    <Quartet>
      {products.map((product, index) => {
        return (
          <ProductTile product={product} key={index} {...props} />
        )
      })}
    </Quartet>
  )
}

ProductQuartet.propTypes = {

}

export default ProductQuartet
