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
  display: flex;
  align-items: flex-start;
  ${CardIcon} {
    display: inline-block;
    width: 2.5rem;
    margin-top: .6rem;
    margin-right: 1rem;
    flex: 0 0 auto;
  }
  > aside {
    display: inline-block;
  }
  ${Label} {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    &:first-of-type {
      padding-right: 7rem;
      ${props => props.theme.media.tablet`
        padding-right: 5rem;
      `}
    }
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
