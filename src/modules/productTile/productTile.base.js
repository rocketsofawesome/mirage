import React from 'react'
import PropTypes from 'prop-types'
import { Label, ROASlider, QuickAdd, formatPrice } from 'SRC'

export default class ProductTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quickAdd: false
    }
  }
  showQuickAdd = () => {
    this.setState({
      quickAdd: true
    })
  }
  hideQuickAdd = () => {
    this.setState({
      quickAdd: false
    })
  }
  render () {
    const {
      className,
      product,
      onClick
    } = this.props
    const { quickAdd } = this.state
    return (
      <div className={className}>
        <QuickAdd
          onMouseEnter={this.showQuickAdd}
          onMouseLeave={this.hideQuickAdd}
          variants={product.variants}
          onClick={onClick}
          show={quickAdd}>
          <ROASlider images={product.images} />
        </QuickAdd>
        <Label>{product.title}</Label>
        <Label>{formatPrice(product.price)}</Label>
      </div>
    )
  }
}

ProductTile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  onClick: PropTypes.func
}
