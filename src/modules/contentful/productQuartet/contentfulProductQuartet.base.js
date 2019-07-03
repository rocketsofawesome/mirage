import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MirageMarkdown, Quartet, ProductTile } from 'SRC'
import { default as products } from './defaultProps'

export default class ContentfulProductQuartet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: undefined
    }
  }
  componentDidMount () {
    const { fields: { productTaxon }, loadProducts } = this.props
    this.setState({
      products: loadProducts(productTaxon)
    })
  }
  render () {
    const {
      className,
      fields: {
        description
      },
      ...props
    } = this.props
    const { products } = this.state
    return (
      <div className={className}>
        <MirageMarkdown>{description}</MirageMarkdown>
        {products &&
          <Quartet>
            {products.map((product, index) => {
              return (
                <ProductTile product={product} key={index} {...props} />
              )
            })}
          </Quartet>
        }
      </div>
    )
  }
}

ContentfulProductQuartet.propTypes = {
  className: PropTypes.string,
  loadProducts: PropTypes.func,
  fields: PropTypes.shape({
    description: PropTypes.string,
    productTaxon: PropTypes.string
  })
}

ContentfulProductQuartet.defaultProps = {
  loadProducts: (taxon) => {
    console.log(products)
    return products
  }
}
