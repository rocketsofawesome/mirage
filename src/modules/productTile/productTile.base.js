import React from 'react'
import PropTypes from 'prop-types'
import { ColorsInterface, P, ROASlider, QuickAdd, ProductPrice } from 'SRC'

import { default as withSortedShots } from 'SRC/utils/shotSorter'

const SortedROASlider = withSortedShots(ROASlider)

export default class ProductTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      selectedColorWay: props.product.code,
      lazyLoad: props.lazyLoad
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
    this.setState({selectedColorWay: code, lazyLoad: false})
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
    const { show, selectedColorWay, lazyLoad } = this.state
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
            {...props}
            product={product}
            shots={colorway.shots}
            renderLink={renderLink}
            target={target}
            lazyLoad={lazyLoad} />
        </QuickAdd>
        { (renderLink && target) ?
          <Link
            className='roa-product-tile-details'
            target={target}>
            <P>{product.name}</P>
            <ProductPrice colorway={colorway} />
          </Link> :
          <div className='roa-product-tile-details'>
            <P>{product.name}</P>
            <ProductPrice colorway={colorway} />
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
