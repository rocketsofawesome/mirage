import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MirageMarkdown, Quartet, ProductTile } from 'SRC'

const ContentfulProductQuartet = styled(({
  className,
  products,
  fields: {
    description,
    productTaxon
  },
  ...props
})  => {
  return (
    <div className={className}>
      <MirageMarkdown>{description}</MirageMarkdown>
      {products &&
        <Quartet>
          {products.map((product, index) => {
            return (
              <ProductTile product={product} key={index} {...props}/>
            )
          })}
        </Quartet>
      }
    </div>
  )
})`
  ${MirageMarkdown} {
    text-align: center;
    margin: 2rem 0;
    * {
      margin: 0;
    }
  }

`

ContentfulProductQuartet.propTypes = {
  products: PropTypes.array
}

/** @component */
export default ContentfulProductQuartet
