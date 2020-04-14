import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P } from 'SRC'

const Disclaimer = styled(P)`
  text-align: center;
  padding-bottom: 10px;
`

const FinalSaleDisclaimer = ({ onSale, finalSaleOn }) => {
  if (!onSale || !finalSaleOn) {
    return null
  }

  return (
    <Disclaimer>
      FINAL SALE: no returns or exchanges
    </Disclaimer>
  )
}

FinalSaleDisclaimer.propTypes = {
  onSale: PropTypes.bool,
  finalSaleOn: PropTypes.bool
}

/** @component */
export default FinalSaleDisclaimer
