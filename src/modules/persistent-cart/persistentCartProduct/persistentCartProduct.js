import React from 'react'
import PropTypes from 'prop-types'
import accounting from 'accounting'
import styled from 'styled-components'
import { XIcon } from 'SRC'

import cloudinary from 'services/cloudinary'

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
const FinalSale = styled(ItemName)`
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
  color: ${props => props.theme.colors.navy};

  em {
    margin-left: 6px;
    font-style: normal;
    color: #707070;
  }
`

const Remove = styled(XIcon)`
  height: 12px;
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 5px;
  width: 12px;

  cursor: pointer;
`

class BaseProduct extends React.Component {
  constructor (props) {
    super(props)
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  _onUpdateQuantity = ({ target: { value } }) => {
    const { item } = this.props
    this.props.onUpdateQuantity(item.id, parseInt(value, 10))
  }

  _onRemoveItem = () => {
    const { item, segmentProductRemoved } = this.props

    this.props.onRemoveItem(item.id)
    segmentProductRemoved(item)
  }

  _renderQuantityPicker = () => {
    return (
      <Select
        value={this.props.item.quantity || ''}
        onChange={this._onUpdateQuantity}>
        {this.quantities.map((i) =>
          <option key={`quantity-${i}`} value={i}>{i}</option>)
        }
      </Select>
    )
  }

  _showRemoveItem = () => {
    const { loading } = this.props
    return !loading && !this._isOutOfStock()
  }

  _getNotEnoughQuantityError = () => {
    const { item: { quantity } } = this.props
    if (quantity === 0) return 'Out of stock.'
    return `Only ${quantity} ${(quantity === 1) ? 'item' : 'items'} left`
  }

  _isOutOfStock = () => {
    const { item } = this.props
    return item.quantity <= 0
  }

  _getVariantShot = () => {
    const { item } = this.props
    const shot = item.shots
      ? (sortShots(item.shots))[0].cloudinary_key
      : item.shot.cloudinary_key
    return cloudinary.url(shot, { transformation: 'order-history' })
  }

  render () {
    const { item, hideCartSidebar, className, renderLink, finalSaleOn } = this.props
    const isOutOfStock = this._isOutOfStock()

    return (
      <div className={className}>
        <Thumbnail onClick={hideCartSidebar}>
          <ImageLink renderLink={renderLink} target={`/products/${item.slug}-${item.colorway_slug}`}>
            <img alt={item.description} src={this._getVariantShot()} />
          </ImageLink>
        </Thumbnail>
        <div>
          <ItemName>
            {item.name}
          </ItemName>
          {item.on_sale
            ?
            <ItemPrice>
              <span className="strikeThruPrice">{accounting.formatMoney(item.original_price)}</span>
              <span>&nbsp;&nbsp;{accounting.formatMoney(item.price)}</span>
            </ItemPrice>
            : <ItemPrice>{accounting.formatMoney(item.price)}</ItemPrice>
          }
          <Attribute>
            Color<em>{item.color}</em>
          </Attribute>
          <Attribute>
            Size<em>{item.size}</em>
          </Attribute>
          {!isOutOfStock &&
            <Attribute>
              Qty
              {this._renderQuantityPicker()}
            </Attribute>
          }
          {(item.not_enough_quantity_error || isOutOfStock) &&
            <Attribute>
              {this._getNotEnoughQuantityError()}
            </Attribute>
          }
          {item.on_sale && finalSaleOn && <FinalSale>FINAL SALE</FinalSale>}
        </div>
        {this._showRemoveItem() && <Remove onClick={this._onRemoveItem} />}
      </div>
    )
  }
}

const renderLink = (inProps) => {
  const { target, children, ...props } = inProps

  return (<a href={target} {...props}>{children}</a>)
}

const Product = styled(BaseProduct)`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid #d5d5d5;

  select {
    font-size: 16px;
  }
`

BaseProduct.propTypes = {
  item: PropTypes.object,
  onUpdateQuantity: PropTypes.func,
  onRemoveItem: PropTypes.func,
  hideCartSidebar: PropTypes.func,
  className: PropTypes.string,
  renderLink: PropTypes.func,
  segmentProductRemoved: PropTypes.func,
  finalSaleOn: PropTypes.bool
}

BaseProduct.defaultProps = {
  renderLink: renderLink
}

export default Product
