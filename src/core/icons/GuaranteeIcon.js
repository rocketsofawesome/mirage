import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const UnstyledGuaranteeIcon = ({className}) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42 42'>
      <path d='M21,2.555c1.389,0,4.005-1.869,5.347-1.509s2.673,3.286,3.876,3.981,4.4.384,5.385,1.366.672,4.182,1.366,5.385,3.621,2.534,3.981,3.876S39.445,19.611,39.445,21s1.809,3.99,1.509,5.347-3.286,2.673-3.981,3.876-.384,4.4-1.366,5.385-4.182.672-5.385,1.366-2.534,3.621-3.876,3.981S22.389,39.445,21,39.445s-4.005,1.869-5.347,1.509-2.673-3.286-3.876-3.981-4.4-.384-5.385-1.366-.672-4.182-1.366-5.385S1.345,27.7,1.046,26.347,2.555,22.389,2.555,21,.686,16.995,1.046,15.653s3.286-2.673,3.981-3.876.384-4.4,1.366-5.385,4.182-.672,5.385-1.366,2.534-3.621,3.876-3.981S19.611,2.555,21,2.555Z'/>
      <circle cx='21' cy='21' r='14.7'/>
      <polyline points='14.629 21.734 18.691 25.483 26.345 17.203'/>
    </svg>
  )
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const animation = css`
  animation: ${rotate};
  animation-duration: 25s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  animation-timing-function: linear;
`

const GuaranteeIcon = styled(UnstyledGuaranteeIcon)`
  width: ${props => props.width};
  circle {
    fill: ${props => props.theme.colors.white};
  }
  path {
    fill: ${props => props.theme.colors.rocketBlue};
    ${props => props.animated && animation}
  }
  polyline {
    stroke-linecap: round;
    stroke-width: 2;
    fill: none;
    stroke: ${props => props.theme.colors.rocketBlue};
  }
`

GuaranteeIcon.propTypes = {
  width: PropTypes.string.isRequired
}

GuaranteeIcon.defaultProps = {
  width: '2.5rem'
}

/** @component */
export default GuaranteeIcon
