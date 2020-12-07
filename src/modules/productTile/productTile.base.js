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

const AboveLaptopSlider = styled.div`
  ${props => props.theme.breakpointsVerbose.belowLaptop`
    display: none;
  `}
`

const BelowLaptopSlider = styled.div`
  ${props => props.theme.breakpointsVerbose.aboveLaptop`
    display: none;
  `}
`

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

  getUrl = () => {
    const { product } = this.props
    const colorway = this.getSelectedColorway()
    return `/products/${product.product_slug}-${colorway.slug}`
  }

  handleQuickViewClick = () => {
    const { product, onQuickView } = this.props
    const colorway = this.getSelectedColorway()
    onQuickView(product, colorway)
  }

  changeColorway = (code) => ({ target }) => {
    this.setState({ selectedColorway: code, lazyLoad: false })
  }

  getSelectedColorway = () => {
    const { product } = this.props
    const { selectedColorway } = this.state
    return product.colorways.find(
      (colorway) => colorway.code === selectedColorway
    )
  }

  render () {
    const {
      className,
      product,
      renderLink,
      evergreenPromoItemCount,
      evergreenPromoPercent,
      sliderLazyLoad,
    } = this.props

    const { selectedColorway, lazyLoad } = this.state
    const colorway = this.getSelectedColorway()
    const target = this.getUrl()
    const Link = renderLink
    const sharedSliderProps = {
      product,
      shots: colorway.shots,
      lazyLoad,
      sliderLazyLoad
    }

    return (
      <div className={className}>
        <AboveLaptopSlider>
          <SliderContainer>
            <SortedROASlider
              {...sharedSliderProps}
              renderLink={renderLink}
              target={target}
            />
            <QuickView>
              <QuickViewButton
                width='100%'
                className='quickViewButton'
                height='35px'
                onClick={this.handleQuickViewClick}
              >
                Quick View
              </QuickViewButton>
            </QuickView>
          </SliderContainer>
        </AboveLaptopSlider>
        <BelowLaptopSlider>
          <SliderContainer>
            <SortedROASlider
              {...sharedSliderProps}
              onClick={this.handleQuickViewClick}
            />
          </SliderContainer>
        </BelowLaptopSlider>
        {renderLink ?
          <Link
            className='roa-product-tile-details'
            target={this.getUrl()}>
            <P fontSize="14px">{product.name}</P>
            <ProductPrice
              colorway={colorway}
              evergreenPromoItemCount={evergreenPromoItemCount}
              evergreenPromoPercent={evergreenPromoPercent}
            />
          </Link> :
          <div className='roa-product-tile-details'>
            <P fontSize="14px">{product.name}</P>
            <ProductPrice
              colorway={colorway}
              evergreenPromoItemCount={evergreenPromoItemCount}
              evergreenPromoPercent={evergreenPromoPercent}
            />
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
      href={target}
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
