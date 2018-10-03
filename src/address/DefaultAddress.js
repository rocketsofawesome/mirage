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
    box-sizing: border-box;
    &:first-of-type {
      padding-right: 7rem;
      ${props => props.theme.media.tablet`
        padding-right: 5rem;
      `}
    }
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
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired
  })
}

/** @component */
export default DefaultAddress
