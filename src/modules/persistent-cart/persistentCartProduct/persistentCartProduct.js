import React from 'react'
import PropTypes from 'prop-types'
import accounting from 'accounting'
import styled, { css } from 'styled-components'
import { XIcon, GraySpinner } from 'SRC'

import cloudinary from 'services/cloudinary'
import { calculateItemPriceAdjustment } from 'utils/pricing'
import { sortVariantsBySize } from 'utils/variantSizeSorter'

const shotTypeSortOrder = [
  'front',
  'back',
  'detail',
  'other',
  'on_model'
]

const sortShots = (shots) => {
  return shots.sort((shot1, shot2) => {
    return shotTypeSortOrder.indexOf(shot1.shot_type) < shotTypeSortOrder.indexOf(shot2.shot_type) ? -1 : 1
  })
}

const Select = styled.select`
  margin-left: 10px;
  font-size: 16px;
`

const Thumbnail = styled.div`
  flex: 0 0 auto;
  img {
    max-width: 110px;
  }
`

const ImageLink = styled(({ renderLink, children, ...props }) => {
  delete props.light
  delete props.uppercase
  delete props.underline
  delete props.fontFamily
  delete props.fontSize
  delete props.fontWeight

  if (renderLink) {
    return renderLink({ ...props, children: children })
  } else {
    return (<a {...props}>{children}</a>)
  }
})`
  cursor: pointer;
`

// Note that updating this will also update FinalSale
const ItemName = styled.h4`
  max-width: 150px;
  margin-top: 0;
  margin-bottom: 5px;
  font-family: ${props => props.theme.fonts.headerFont};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.navy};
  text-transform: uppercase;
`

const ItemPrice = styled.h4`
  max-width: 150px;
  margin-top: 0;
  margin-bottom: 5px;
  font-family: ${props => props.theme.fonts.headerFont};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.navy};
  text-transform: uppercase;

  .strikeThruPrice {
    color: ${props => props.theme.colors.loading};
    text-decoration: line-through;
  }
`

const Attribute = styled.div`
  margin-bottom: 4px;

  font-size: 14px;
  font-weight: normal;
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props => props.red ? props.theme.colors.red : props.theme.colors.navy};

  em {
    margin-left: 6px;
    font-style: normal;
    color: #707070;
  }
`

const RemoveContainer = styled.div`
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 5px;
  min-width: 21px;
  text-align: center;
`

const Remove = styled(XIcon)`
  height: 12px;
  width: 12px;
  cursor: pointer;
  transition: opacity 200ms;

  ${props => props.disabled && css`
    opacity: 0.5;
    pointer-events: none;
  `}
`

const AttributeContainer = styled.div`
  min-width: 150px;

  ${props => props.theme.breakpointsVerbose.belowPhone`
    min-width: 0;
  `}
`

const SpinnerContainer = styled.span`
  vertical-align: middle;
  margin-left: 10px;
`

const LineItemPrice = ({ price, adjustedPrice }) => {
  if (adjustedPrice) {
    return (
      <ItemPrice>
        <span className="strikeThruPrice">{accounting.formatMoney(price)}</span>
        <span>&nbsp;&nbsp;{accounting.formatMoney(adjustedPrice)}</span>
      </ItemPrice>
    )
  }

  return <ItemPrice>{accounting.formatMoney(price)}</ItemPrice>
}

class BaseProduct extends React.Component {
  constructor (props) {
    super(props)
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  onUpdateQuantity = ({ target: { value } }) => {
    const { item, onUpdateQuantity } = this.props
    onUpdateQuantity(item, parseInt(value, 10))
  }

  onUpdateSize = ({ target: { value }}) => {
    const { item, onUpdateSize } = this.props
    onUpdateSize(item, value)
  }

  onRemoveItem = () => {
    const { item, segmentProductRemoved, onRemoveItem } = this.props
    onRemoveItem(item.id)
    segmentProductRemoved(item, 'bag')
  }

  renderSizePicker = () => {
    const { isUpdatingSize, item } = this.props

    if (isUpdatingSize) {
      return (
        <SpinnerContainer>
          <GraySpinner size="21px" />
        </SpinnerContainer>
      )
    }
    const sortedVariants = sortVariantsBySize(item.colorway_variants)

    return (
      <Select value={this.props.item.variant_id} onChange={this.onUpdateSize}>
        {
          sortedVariants.map(variant =>
            <option
              key={variant.id}
              value={variant.id}
              disabled={!variant.in_stock}
            >
              {variant.size}
            </option>
          )
        }
      </Select>
    )
  }

  renderQuantityPicker = () => {
    const { isUpdatingQuantity } = this.props

    if (isUpdatingQuantity) {
      return (
        <SpinnerContainer>
          <GraySpinner size="21px" />
        </SpinnerContainer>
      )
    }
    return (
      <Select
        value={this.props.item.quantity || ''}
        onChange={this.onUpdateQuantity}>
        {this.quantities.map((i) =>
          <option key={`quantity-${i}`} value={i}>{i}</option>)
        }
      </Select>
    )
  }

  renderRemoveIcon = () => {
    const { removingItemId, item } = this.props

    if (removingItemId === item.id) {
      return <GraySpinner size="21px" />
    }
    return <Remove onClick={this.onRemoveItem} disabled={!!removingItemId} />
  }

  showRemoveItem = () => {
    const { loading } = this.props
    return !loading && !this.isOutOfStock()
  }

  getNotEnoughQuantityError = () => {
    const { item: { quantity } } = this.props
    if (quantity === 0) return 'Out of stock.'
    return `Only ${quantity} ${(quantity === 1) ? 'item' : 'items'} left`
  }

  isOutOfStock = () => {
    const { item } = this.props
    return item.quantity <= 0
  }

  getVariantShot = () => {
    const { item } = this.props
    const shot = item.shots
      ? (sortShots(item.shots))[0].cloudinary_key
      : item.shot.cloudinary_key
    return cloudinary.url(shot, { transformation: 'order-history' })
  }

  render () {
    const {
      item,
      hideCartSidebar,
      className,
      renderLink,
      finalSaleOn
    } = this.props
    const isOutOfStock = this.isOutOfStock()
    const price = parseFloat(item.original_price) * item.quantity
    return (
      <div className={className}>
        <Thumbnail onClick={hideCartSidebar}>
          <ImageLink renderLink={renderLink} target={`/products/${item.slug}-${item.colorway_slug}`}>
            <img alt={item.description} src={this.getVariantShot()} />
          </ImageLink>
        </Thumbnail>
        <AttributeContainer>
          <ItemName>
            {item.name}
          </ItemName>
          <LineItemPrice
            price={price}
            adjustedPrice={calculateItemPriceAdjustment(item)}
          />
          <Attribute>
            Color<em>{item.color}</em>
          </Attribute>
          <Attribute>
            Size
            {this.renderSizePicker()}
          </Attribute>
          {!isOutOfStock &&
            <Attribute>
              Qty
              {this.renderQuantityPicker()}
            </Attribute>
          }
          {(item.not_enough_quantity_error || isOutOfStock) &&
            <Attribute red={true}>
              {this.getNotEnoughQuantityError()}
            </Attribute>
          }
          {item.on_sale && finalSaleOn && <ItemName>FINAL SALE</ItemName>}
        </AttributeContainer>
        <RemoveContainer>
          {this.renderRemoveIcon()}
        </RemoveContainer>
      </div>
    )
  }
}

const Product = styled(BaseProduct)`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #d5d5d5;
`

BaseProduct.propTypes = {
  className: PropTypes.string,
  finalSaleOn: PropTypes.bool,
  hideCartSidebar: PropTypes.func,
  isUpdatingQuantity: PropTypes.bool,
  isUpdatingSize: PropTypes.bool,
  item: PropTypes.object,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onUpdateSize: PropTypes.func.isRequired,
  removingItemId: PropTypes.number,
  renderLink: PropTypes.func,
  segmentProductRemoved: PropTypes.func
}

const renderLink = (inProps) => {
  const { target, children, ...props } = inProps
  return (<a href={target} {...props}>{children}</a>)
}

BaseProduct.defaultProps = {
  isUpdatingQuantity: false,
  isUpdatingSize: false,
  removingItemId: null,
  renderLink: renderLink
}

/** @component */
export default Product
