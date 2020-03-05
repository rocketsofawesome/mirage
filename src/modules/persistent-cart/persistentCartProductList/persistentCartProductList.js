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
      updateBag,
      removeItem,
      hideCartSidebar,
      renderProductLink,
      segmentProductRemoved,
      finalSaleOn
    } = this.props

    return (
      <section className={className}>
        <BagListBody>
          <BagListWrapper>
            {lineItems.map((variant, i) =>
              <PersistentCartProduct
                key={`bag-item-${variant.id}`}
                item={variant}
                onUpdateQuantity={updateBag}
                onRemoveItem={removeItem}
                renderLink={renderProductLink}
                segmentProductRemoved={segmentProductRemoved}
                hideCartSidebar={hideCartSidebar}
                finalSaleOn={finalSaleOn}
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
  updateBag: PropTypes.func,
  removeItem: PropTypes.func,
  hideCartSidebar: PropTypes.func,
  segmentCartViewed: PropTypes.func,
  segmentProductRemoved: PropTypes.func,
  renderProductLink: PropTypes.func
}

export default PersistentCartProductList
