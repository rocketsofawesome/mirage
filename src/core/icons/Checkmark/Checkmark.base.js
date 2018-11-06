import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import theme from 'SRC/core/theme/theme'

export const UnstyledCheckmark = (props) => {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.5 26.5'>
      <polyline points='7,14 11,17.7 18.6,9.5'  />
    </svg>
  )
}

export const animateCheckmarkIn = (props) => {
  return keyframes`
    0% {
      width: 0;
      stroke-dashoffset: 15;
      stroke: transparent;
    }
    50% {
      width: ${props.width};
      stroke-dashoffset: 15;
      stroke: ${props.stroke};
    }
    100% {
      width: ${props.width};
      transform: scaleX(1);
      stroke-dashoffset: 0;
    }
  `
}

const Checkmark = styled(UnstyledCheckmark)`
  width: ${props => props.width};
  fill: none;
  stroke-width: 2;
  > polyline {
    stroke-linecap: round;
    stroke-dasharray: 16;
    stroke-dashoffset: 0;
    animation-name: ${props => animateCheckmarkIn};
    animation-duration: 0.5s
  }
`

Checkmark.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.string
}

Checkmark.defaultProps = {
  width: '2.6rem'
}

/** @component */
export default Checkmark
