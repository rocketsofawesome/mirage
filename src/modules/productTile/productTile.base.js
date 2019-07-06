import React from 'react'
import PropTypes from 'prop-types'
import { Label, ROASlider, QuickAdd, formatPrice } from 'SRC'

import { default as withSortedShots } from 'SRC/utils/shotSorter'

const SortedROASlider = withSortedShots(ROASlider)

export default class ProductTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  showQuickAdd = () => {
    this.setState({
      show: true
    })
  }
  hideQuickAdd = () => {
    this.setState({
      show: false
    })
  }
  render () {
    const {
      className,
      product,
      ...props
    } = this.props
    const { show } = this.state
    return (
      <div className={className}>
        <QuickAdd
          onMouseEnter={this.showQuickAdd}
          onMouseLeave={this.hideQuickAdd}
          variants={product.skus}
          show={show}
          {...props}>
          <SortedROASlider product={product} shots={product.colorways[0].shots} />
        </QuickAdd>
        <Label>{product.name}</Label>
        <Label>{formatPrice(product.colorways[0].skus[0].price)}</Label>
      </div>
    )
  }
}

ProductTile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
}
