import React from 'react'
import PropTypes from 'prop-types'
import { Label, ROASlider, QuickAdd, formatPrice } from 'SRC'

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
          variants={product.variants}
          show={show}
          {...props}>
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
}
