import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from '../typography/Label'
import CardIcon from '../icons/cards/CardIcon'

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

const StyledDefaultPayment = styled.section`
  ${CardIcon} {
    float: left;
    display: inline-block;
    width: 2.5rem;
    margin-top: .6rem;
    margin-right: 1rem;
  }
  > aside {
    display: inline-block;
  }
  ${Label} {
    display: inline-block;
    width: 100%;
  }
`

const DefaultPayment = ({card: {
    brand, exp_month, exp_year, last_4_digits
  }}) => {
  return (
    <StyledDefaultPayment>
      <CardIcon brand={brand} />
      <aside>
        <DefaultLabel>{brand.charAt(0).toUpperCase()}{brand.slice(1)} ending in ****{last_4_digits}</DefaultLabel>
        <DefaultLabel> expires {exp_month}/{exp_year}</DefaultLabel>
      </aside>
    </StyledDefaultPayment>
  )
}

DefaultPayment.propTypes = {
  brand: PropTypes.string,
  exp_month: PropTypes.string,
  exp_year: PropTypes.string,
  last_4_digits: PropTypes.string
}

/** @component */
export default DefaultPayment
