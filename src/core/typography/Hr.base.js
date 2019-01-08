import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const UnstyledHr = ({className}) => {
  return (
    <hr className={className} />
  )
}

const BaseHr = styled(UnstyledHr)`
  height: .1rem;
  width: ${props => props.width};
  border: none;
  margin: 1rem 0;
`

BaseHr.propTypes = {
  width: PropTypes.string.isRequired
}

BaseHr.defaultProps = {
  width: '100%'
}

/** @component */
export default BaseHr
