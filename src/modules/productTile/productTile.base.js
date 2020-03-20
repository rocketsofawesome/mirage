import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  ColorsInterface,
  P,
  ROASlider,
  ProductPrice,
  WhiteButton
} from 'SRC'
import { withSortedShots } from 'SRC/utils'

const SortedROASlider = withSortedShots(ROASlider)

const SliderContainer = styled.div`
  position: relative;
  cursor: pointer;
`

const QuickView = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  width: 90%;
  transform: translate(-50%, 0);
  transition: opacity 200ms ease-in;

  ${SliderContainer}:hover & {
    opacity: 1;
  }
`

const QuickViewButton = styled(WhiteButton)`
  box-shadow: 0 2px 3px rgba(0,0,0,0.1);
`

export default class ProductTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      selectedColorway: props.product.code,
      lazyLoad: props.lazyLoad
    }
  }

  getColorwayIndex = (code) => {
    const { product: { colorways } } = this.props
    return colorways.findIndex((colorway) => (colorway.code === code))
  }

  handleQuickViewClick = () => {
    const { product, onQuickView } = this.props
    onQuickView(product)
  }

  changeColorway = (code) => ({ target }) => {
    this.setState({selectedColorway: code, lazyLoad: false})
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
    const { selectedColorway, lazyLoad } = this.state
    const colorway = this.getColorway(selectedColorway)
    const target = `products/${product.product_slug}-${colorway.slug}`
    const Link = renderLink

    return (
      <div className={className}>
        <SliderContainer>
          <SortedROASlider
            {...props}
            product={product}
            shots={colorway.shots}
            lazyLoad={lazyLoad}
            onClick={this.handleQuickViewClick}
          />
          <QuickView>
            <QuickViewButton
              width='100%'
              height='35px'
              onClick={this.handleQuickViewClick}
            >
              Quick View
            </QuickViewButton>
          </QuickView>
        </SliderContainer>
        {renderLink ?
          <Link
            className='roa-product-tile-details'
            target={target}>
            <P fontSize="14px">{product.name}</P>
            <ProductPrice colorway={colorway} />
          </Link> :
          <div className='roa-product-tile-details'>
            <P fontSize="14px">{product.name}</P>
            <ProductPrice colorway={colorway} />
          </div>
        }
        <ColorsInterface
          selected={selectedColorway}
          colorways={product.colorways}
          productId={product.id}
          onChange={this.changeColorway}
        />
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
  ),
  onQuickView: () => null
}

ProductTile.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  renderLink: PropTypes.func,
  onQuickView: PropTypes.func
}
