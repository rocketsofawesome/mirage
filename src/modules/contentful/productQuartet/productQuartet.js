import React from 'react'
import PropTypes from 'prop-types'
import { ProductTile, Quartet, Duet, Default, Tablet } from 'SRC'

const ProductQuartet = ({ className, products, ...props}) => {
  return (
    <div>
      <Default>
        <Duet>
          {products.map((product, index) => {
            return (
              <ProductTile product={product} key={index} {...props} />
            )
          })}
        </Duet>
      </Default>
      <Tablet>
        <Quartet>
          {products.map((product, index) => {
            return (
              <ProductTile product={product} key={index} {...props} />
            )
          })}
        </Quartet>
      </Tablet>
    </div>
  )
}

ProductQuartet.propTypes = {

}

export default ProductQuartet
