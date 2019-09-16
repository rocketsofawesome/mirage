import React from 'react'
import PropTypes from 'prop-types'

import {P} from 'SRC'

const ProgressBarText = ({ itemsInBag }) => {
  const itemsLeft = 4 - itemsInBag
  const itemDescription = itemsLeft > 1 ? 'items' : 'item'
  let message = `So close! Add ${itemsLeft} more ${itemDescription} to GET 20% OFF!`

  if (itemsLeft === 0) {
    message = '🎉 YAY! 20% off your 4+ order! 🎉'
  }

  return <P>{message}</P>
}

ProgressBarText.propTypes = {
  itemsInBag: PropTypes.number.isRequired
}

/** @component */
export default ProgressBarText
