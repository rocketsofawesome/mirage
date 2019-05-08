import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import accounting from 'accounting'

import { H4 } from 'SRC'

const FreeShippingNotMet = styled(H4)`
  font-weight: 200!important;
  span{
    font-weight: 600;
  }
`

const wiggle = keyframes`
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-5px);
  }
  30% {
    transform: translateY(0px);
  }
  35% {
    transform: translateY(-3px);
  }
  40% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`

const FreeShipping = styled(H4)`
  animation: ${wiggle} 2s ease-in-out;
`

const FreeShippingText = ({subTotal}) => {
  const freeShippingAmount = 50 - parseFloat(subTotal)
  if (freeShippingAmount > 0) {
    return (
      <FreeShippingNotMet
        lowercase>
        You’re <span>{accounting.formatMoney(freeShippingAmount)}</span> away from free shipping
      </FreeShippingNotMet>
    )
  } else {
    return (<FreeShipping lowercase>Yay! You’ll get free shipping!🚀</FreeShipping>)
  }
}

FreeShippingText.propTypes = {
  subTotal: PropTypes.number
}

export default FreeShippingText
