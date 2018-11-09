import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label, { LowercaseLabel } from 'SRC/core/typography/Label'
import CardIcon from 'SRC/core/icons/cards/CardIcon'

const prettyBrand = (brand) => `${brand.charAt(0).toUpperCase()}${brand.slice(1)}`
const cardData = (brand, last_4_digits) => {
  return `${prettyBrand(brand)} ending in ****${last_4_digits}`
}

const BaseDefaultPayment = ({
  card: {
    brand,
    exp_month,
    exp_year,
    last_4_digits
  },
  className
}) => {
  return (
    <section className={className}>
      <CardIcon brand={brand} />
      <aside>
        <LowercaseLabel>{cardData(brand, last_4_digits)}</LowercaseLabel>
        <LowercaseLabel>expires {exp_month}/{exp_year}</LowercaseLabel>
      </aside>
    </section>
  )
}

const DefaultPayment = styled(BaseDefaultPayment)`
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

DefaultPayment.propTypes = {
  card: PropTypes.shape({
    brand: PropTypes.string,
    exp_month: PropTypes.string,
    exp_year: PropTypes.string,
    last_4_digits: PropTypes.string
  }).isRequired
}

/** @component */
export default DefaultPayment
export { BaseDefaultPayment, cardData }
