import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H1, H2, H3, Hr, P } from 'SRC'

const ProductInformation = styled(({
  className,
  description,
  header,
  price,
  subheader
}) => {
  return (
    <div className={className}>
      {subheader && <H3>{subheader}</H3>}
      <H1>{header}</H1>
      <H2>{price}</H2>
      <Hr />
      {description && <P>{description}</P>}
    </div>
  )
})`
  ${H1} {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  ${H2}, ${H3} {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`
ProductInformation.propTypes = {
  description: PropTypes.string,
  header: PropTypes.string,
  price: PropTypes.string,
  subheader: PropTypes.string
}
/** @component */
export default ProductInformation
