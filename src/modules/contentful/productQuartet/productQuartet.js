import React from 'react'
import PropTypes from 'prop-types'
import { ProductTile, Quartet, Duet, Default, TabletMax } from 'SRC'

const ProductQuartet = ({
  className,
  products,
  evergreenPromoItemCount,
  evergreenPromoPercent,
  ...props
}) => {
  return (
    <div>
      <Default displayTarget='belowTabletMax'>
        <Duet>
          {products.map((product, index) => {
            return (
              <ProductTile
                product={product}
                key={index}
                evergreenPromoItemCount={evergreenPromoItemCount}
                evergreenPromoPercent={evergreenPromoPercent}
                {...props}
              />
            )
          })}
        </Duet>
      </Default>
      <TabletMax laptopDisplay='block'>
        <Quartet>
          {products.map((product, index) => {
            return (
              <ProductTile
                product={product}
                key={index}
                evergreenPromoItemCount={evergreenPromoItemCount}
                evergreenPromoPercent={evergreenPromoPercent}
                {...props}
              />
            )
          })}
        </Quartet>
      </TabletMax>
    </div>
  )
}

ProductQuartet.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
  evergreenPromoItemCount: PropTypes.string,
  evergreenPromoPercent: PropTypes.string
}

export default ProductQuartet
