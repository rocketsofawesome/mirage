import React from 'react'
import PropTypes from 'prop-types'
import accounting from 'accounting'
import styled from 'styled-components'

import {P} from 'SRC'

const Container = styled.div`
  padding: 0 20px;
`

const Message = ({
  order,
  itemsInBag,
  evergreenPromoItemCount,
  evergreenPromoPercent
}) => {
  const itemsLeft = parseInt(evergreenPromoItemCount, 10) - itemsInBag
  const itemDescription = itemsLeft > 1 ? 'items' : 'item'

  if (itemsLeft === parseInt(evergreenPromoItemCount, 10)) {
    return (
      <P>
        You're {itemsLeft} {itemDescription} away from
        automatically getting {evergreenPromoPercent}% off, every day!{' '}
        <span role="img" aria-label="hearts">💕</span>
      </P>
    )
  } else if (itemsLeft <= 0) {
    const savings = parseFloat(order.subtotal) - parseFloat(order.subtotal_after_promotions)
    return (
      <P>
        <span role="img" aria-label="confetti">🎉 </span>{' '}
        Yay! You'll save <strong>{accounting.formatMoney(savings)}</strong> on
        this order of {evergreenPromoItemCount}+ items.{' '}
        <span role="img" aria-label="confetti">🎉 </span>
      </P>
    )
  }

  return (
    <P>
      So close! Add <strong>{itemsLeft}</strong> more {itemDescription} to
      automatically get {evergreenPromoPercent}% off, every day!{' '}
      <span role="img" aria-label="hearts">💕</span>
    </P>
  )

}

const ProgressBarText = ({
  order,
  itemsInBag,
  evergreenPromoItemCount,
  evergreenPromoPercent
}) => (
  <Container>
    <Message
      order={order}
      itemsInBag={itemsInBag}
      evergreenPromoItemCount={evergreenPromoItemCount}
      evergreenPromoPercent={evergreenPromoPercent}
    />
  </Container>
)

ProgressBarText.propTypes = {
  itemsInBag: PropTypes.number.isRequired,
  order: PropTypes.object.isRequired,
  evergreenPromoItemCount: PropTypes.string.isRequired,
  evergreenPromoPercent: PropTypes.string.isRequired
}

/** @component */
export default ProgressBarText
