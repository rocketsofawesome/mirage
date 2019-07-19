import React from 'react'
import PropTypes from 'prop-types'
import { ColorsInterface, P, ROASlider, QuickAdd, formatPrice } from 'SRC'

import { default as withSortedShots } from 'SRC/utils/shotSorter'

const SortedROASlider = withSortedShots(ROASlider)

export default class ProductTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      selectedColorWay: props.product.code
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

  getColorwayIndex = (code) => {
    const { product: { colorways } } = this.props
    return colorways.findIndex((colorway) => (colorway.code === code))
  }

  changeColorway = (code) => ({ target }) => {
    this.setState({selectedColorWay: code})
  }

  getColorway = (code) => {
    const { product } = this.props
    const index = this.getColorwayIndex(code)
    return product.colorways[index]
  }
  render () {
    const {
      className,
      product,
      renderLink,
      ...props
    } = this.props
    const { show, selectedColorWay } = this.state
    const colorway = this.getColorway(selectedColorWay)
    const target = `products/${product.product_slug}-${colorway.slug}`
    const Link = renderLink
    return (
      <div className={className}>
        <QuickAdd
          onMouseEnter={this.showQuickAdd}
          onMouseLeave={this.hideQuickAdd}
          variants={colorway.skus}
          show={show}
          {...props}>
          <SortedROASlider
            product={product}
            shots={colorway.shots}
            renderLink={renderLink}
            target={target} />
        </QuickAdd>
        { (renderLink && target) ?
          <Link
            className='roa-prodiuct-tile-details'
            target={target}>
            <P>{product.name}</P>
            <P>{formatPrice(colorway.skus[0].price)}</P>
          </Link> :
          <div className='roa-prodiuct-tile-details'>
            <P>{product.name}</P>
            <P>{formatPrice(colorway.skus[0].price)}</P>
          </div>
        }
        <ColorsInterface
          selected={selectedColorWay}
          colorways={product.colorways}
          productId={product.id}
          onChange={this.changeColorway} />
      </div>
    )
  }
}

ProductTile.defaultProps = {
  renderLink: ({className, children, target, ...props}) => (
    <a
      className={className}
      href={`/${target}`}
      {...props}>
      {children}
    </a>
  )
}

ProductTile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  renderLink: PropTypes.func
}
