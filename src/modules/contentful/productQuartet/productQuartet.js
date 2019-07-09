import React from 'react'
import PropTypes from 'prop-types'
import { ProductTile, Quartet, Duet, Default, TabletMax } from 'SRC'

const ProductQuartet = ({ className, products, ...props}) => {
  return (
    <div>
      <Default displayTarget='belowTabletMax'>
        <Duet>
          {products.map((product, index) => {
            return (
              <ProductTile product={product} key={index} {...props} />
            )
          })}
        </Duet>
      </Default>
      <TabletMax laptopDisplay='block'>
        <Quartet>
          {products.map((product, index) => {
            return (
              <ProductTile product={product} key={index} {...props} />
            )
          })}
        </Quartet>
      </TabletMax>
    </div>
  )
}

ProductQuartet.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array
}

export default ProductQuartet
