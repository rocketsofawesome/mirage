import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MirageMarkdown, Quartet, ProductTile } from 'SRC'

const ProductQuartet = styled(({ description, products, ...props })  => {
  return (
    <div>
      <MirageMarkdown>{description}</MirageMarkdown>
      <Quartet>
        {products.map((product, index) => {
          return (
            <ProductTile product={product} key={index} {...props}/>
          )
        })}
      </Quartet>
    </div>
  )
})`

`

ProductQuartet.propTypes = {
  products: PropTypes.array
}

/** @component */
export default ProductQuartet
