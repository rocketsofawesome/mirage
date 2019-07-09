import React from 'react'
import PropTypes from 'prop-types'
import { P, ROASlider, QuickAdd, formatPrice } from 'SRC'

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
  getColorway = () => {
    const { product } = this.props
    const index = product.colorways.findIndex((colorway) => colorway.code === product.code)
    return product.colorways[index]
  }
  render () {
    const {
      className,
      product,
      ...props
    } = this.props
    const colorway = this.getColorway()
    const { show } = this.state
    return (
      <div className={className}>
        <QuickAdd
          onMouseEnter={this.showQuickAdd}
          onMouseLeave={this.hideQuickAdd}
          variants={colorway.skus}
          show={show}
          {...props}>
          <SortedROASlider product={product} shots={product.colorways[0].shots} />
        </QuickAdd>
        <P>{product.name}</P>
        <P>{formatPrice(product.colorways[0].skus[0].price)}</P>
      </div>
    )
  }
}

ProductTile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
}
