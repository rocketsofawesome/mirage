import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Amex from './Amex.base'
import Diners from './Diners.base'
import Discover from './Discover.base'
import JCB from './JCB.base'
import Mastercard from './Mastercard.base'
import Maestro from './Maestro.base'
import Paypal from './Paypal.base'
import Visa  from './Visa.base'

const CardIconBase = ({ brand, className }) => {
  const children = {
    amex: Amex,
    diners: Diners,
    discover: Discover,
    jcb: JCB,
    mastercard: Mastercard,
    maestro: Maestro,
    paypal: Paypal,
    visa: Visa
  }
  const Child = children[brand]
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
