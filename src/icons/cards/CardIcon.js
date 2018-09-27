import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Amex from './Amex.base'
import Default from './Default.base'
import Diners from './Diners.base'
import Discover from './Discover.base'
import JCB from './JCB.base'
import Mastercard from './Mastercard.base'
import Maestro from './Maestro.base'
import Paypal from './Paypal.base'
import Visa  from './Visa.base'

const CardIconBase = ({ brand, className }) => {
  let Child = null
    switch (brand) {
      case 'amex':
        Child = Amex
        break
      case 'diners':
        Child = Diners
        break
      case 'discover':
        Child = Discover
        break
      case 'jcb':
        Child = JCB
        break
      case 'mastercard':
        Child = Mastercard
        break
      case 'maestro':
        Child = Maestro
        break
      case 'paypal':
        Child = Paypal
        break
      case 'visa':
        Child = Visa
        break
      default:
        Child = Default
  }
  return (
    <Child className={className} />
  )
}

const CardIcon = styled(CardIconBase)`
  fill: ${props => props.theme.colors.navy};
`

CardIcon.propTypes = {
  brand: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  }).isRequired
}

/** @component */
export default CardIcon
