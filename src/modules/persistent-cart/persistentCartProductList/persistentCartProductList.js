import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PersistentCartProduct } from 'SRC'

const BagListBody = styled.main`
  border-bottom: 1px solid ${props => props.theme.colors.gray4};
  border-top: 1px solid ${props => props.theme.colors.gray4};
  flex-grow: 1;
  margin-top: 6px;
`

const BagListWrapper = styled.div`
  height: auto;
`

class BasePersistentCartProductList extends Component {
  constructor(props) {
    super(props)
    this.state = { removingItemId: null }

    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }

  async handleRemoveItem (id) {
    const { removeItem } = this.props

    this.setState({ removingItemId: id })
    await removeItem(id)
    this.setState({ removingItemId: null })
  }

  componentDidMount () {
    const { lineItems, segmentCartViewed } = this.props
    if (lineItems) {
      segmentCartViewed(lineItems)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { lineItems, segmentCartViewed } = this.props
    if (prevProps.lineItems === undefined && lineItems) {
      segmentCartViewed(lineItems)
    }
  }

  render () {
    const {
      className,
      lineItems,
      onUpdateQuantity,
      onUpdateSize,
      hideCartSidebar,
      renderProductLink,
      segmentProductRemoved,
      finalSaleOn,
      isUpdatingQuantity,
      isUpdatingSize
    } = this.props
    const { removingItemId } = this.state

    return (
      <section className={className}>
        <BagListBody>
          <BagListWrapper>
            {lineItems.map((lineItem, i) =>
              <PersistentCartProduct
                key={`bag-item-${lineItem.id}`}
                item={lineItem}
                onUpdateQuantity={onUpdateQuantity}
                onUpdateSize={onUpdateSize}
                onRemoveItem={this.handleRemoveItem}
                renderLink={renderProductLink}
                segmentProductRemoved={segmentProductRemoved}
                hideCartSidebar={hideCartSidebar}
                finalSaleOn={finalSaleOn}
                isUpdatingSize={isUpdatingSize === lineItem.id}
                isUpdatingQuantity={isUpdatingQuantity === lineItem.id}
                removingItemId={removingItemId}
              />
            )}
          </BagListWrapper>
        </BagListBody>
      </section>
    )
  }
}

const PersistentCartProductList = styled(BasePersistentCartProductList)`
  padding-bottom: 275px;
`

BasePersistentCartProductList.propTypes = {
  className: PropTypes.string,
  lineItems: PropTypes.array,
  onUpdateSize: PropTypes.func,
  onUpdateQuantity: PropTypes.func,
  removeItem: PropTypes.func,
  hideCartSidebar: PropTypes.func,
  segmentCartViewed: PropTypes.func,
  segmentProductRemoved: PropTypes.func,
  renderProductLink: PropTypes.func,
  isUpdatingSize: PropTypes.number,
  isUpdatingQuantity: PropTypes.number
}

BasePersistentCartProductList.defaultProps = {
  isUpdatingQuantity: null,
  isUpdatingSize: null
}

/** @component */
export default PersistentCartProductList
