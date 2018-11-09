import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label, { LowercaseLabel } from 'SRC/core/typography/Label'

const BaseDefaultAddress = ({
  address: {
    first_name,
    last_name,
    address1,
    address2,
    city,
    state,
    zipcode
  },
  className
}) => {
  return (
    <section className={className}>
      <LowercaseLabel>{first_name} {last_name}</LowercaseLabel>
      <LowercaseLabel>{address1}</LowercaseLabel>
      {address2 && <LowercaseLabel>{address2}</LowercaseLabel>}
      <LowercaseLabel>{city}, {state} {zipcode}</LowercaseLabel>
    </section>
  )
}

const DefaultAddress = styled(BaseDefaultAddress)`
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
export { BaseDefaultAddress }
