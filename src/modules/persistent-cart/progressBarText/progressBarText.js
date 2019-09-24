import React from 'react'
import PropTypes from 'prop-types'
import accounting from 'accounting'
import styled from 'styled-components'

import {P} from 'SRC'

const Container = styled.div`
  padding: 0 20px;
`

const Message = ({ order, itemsInBag }) => {
  const itemsLeft = 4 - itemsInBag
  const itemDescription = itemsLeft > 1 ? 'items' : 'item'

  if (itemsLeft === 4) {
    return (
      <P>
        You're {itemsLeft} {itemDescription} away from
        automatically getting 20% off, every day!{' '}
        <span role="img" aria-label="hearts">💕</span>
      </P>
    )
  } else if (itemsLeft <= 0) {
    const savings = parseFloat(order.subtotal) - parseFloat(order.subtotal_after_promotions)
    return (
      <P>
        <span role="img" aria-label="confetti">🎉 </span>{' '}
        Yay! You'll save <strong>{accounting.formatMoney(savings)}</strong> on
        this order of 4+ items.{' '}
        <span role="img" aria-label="confetti">🎉 </span>
      </P>
    )
  }

  return (
    <P>
      So close! Add <strong>{itemsLeft}</strong> more {itemDescription} to
      automatically get 20% off, every day!{' '}
      <span role="img" aria-label="hearts">💕</span>
    </P>
  )

}

const ProgressBarText = ({ order, itemsInBag }) => (
  <Container>
    <Message order={order} itemsInBag={itemsInBag} />
  </Container>
)

ProgressBarText.propTypes = {
  itemsInBag: PropTypes.number.isRequired,
  order: PropTypes.object.isRequired
}

/** @component */
export default ProgressBarText
