import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from '../typography/Label'

const DefaultLabel = ({children}) => {
  return (
    <Label
      fontSize='2rem'
      letterSpacing='normal'
      fontWeight='normal'
      lowercase>
        {children}
    </Label>
  )
}

const StyledDefaultAddress = styled.section`
  ${Label} {
    display: inline-block;
    width: 100%;
  }
`

const DefaultAddress = ({address: {
  first_name, last_name, address1, address2, city, state, zipcode
}}) => {
  return (
    <StyledDefaultAddress>
      <DefaultLabel>{first_name} {last_name}</DefaultLabel>
      <DefaultLabel>{address1}</DefaultLabel>
      {address2 && <DefaultLabel>{address2}</DefaultLabel>}
      <DefaultLabel>{city}, {state} {zipcode}</DefaultLabel>
    </StyledDefaultAddress>
  )
}

DefaultAddress.propTypes = {
  address: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string
  })
}

/** @component */
export default DefaultAddress
