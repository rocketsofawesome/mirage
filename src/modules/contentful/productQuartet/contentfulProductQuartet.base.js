import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MirageMarkdown, ProductQuartet } from 'SRC'
import { default as products } from './defaultProps'

export default class ContentfulProductQuartet extends Component {
  componentDidMount () {
    const { fields: { productTaxon }, loadProducts } = this.props
    loadProducts(productTaxon)
  }
  render () {
    const {
      className,
      fields: {
        description,
        productTaxon
      },
      renderQuartet
    } = this.props
    return (
      <div className={className}>
        <MirageMarkdown>{description}</MirageMarkdown>
        {renderQuartet(productTaxon, this.props)}
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
  loadProducts: () => { console.warn('loadProducts function has not been passed to contentfulProductQuartet')},
  renderQuartet: (taxon, props) => <ProductQuartet products={products} {...props}/>
}
