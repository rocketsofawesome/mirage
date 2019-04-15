import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseClose = styled(({className, ...props}) => {
  return (
    <svg
      className={className}
      version='1.1'
      viewBox='0 0 800 800'
      {...props}>
      <text class>Close</text>
      <line x1='50' y1='50' x2='750' y2='750'/>
      <line x1='750' y1='50' x2='50' y2='750'/>
  </svg>
  )
})`
  fill: none;
  stroke-width: ${props => props.strokeWidth};
  stroke-linecap:round;
  stroke-miterlimit:10;
  width: ${props => props.width};
  text {
    font-size: 0;
  }
`

BaseClose.propTypes = {
  strokeWidth: PropTypes.number,
  width: PropTypes.string
}

BaseClose.defaultProps = {
  strokeWidth: 80,
  width: '2.5rem'
}

/** @component */
export default BaseClose
