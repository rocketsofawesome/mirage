import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const BaseChevron = ({className, ...props}) => {
  return (
    <svg className={className} viewBox='0 0 48 24.12' onClick={props.onClick}>
      <polyline points='1 1 24 22.75 47 1' />
    </svg>
  )
}

const pulse = (props) => {
  if (props.left || props.right) {
    return keyframes`
      0% {
        transform: translateX(0px) ${direction(props)};
      }
      50% {
        transform: translateX(${pulseDirection(props)}) ${direction(props)};
      }
      100% {
        transform: translateX(0px) ${direction(props)};
      }
    `
  } else {
    return keyframes`
      0% {
        transform: translateY(0px) ${direction(props)};
      }
      50% {
        transform: translateY(-.2rem) ${direction(props)};
      }
      100% {
        transform: translateY(0px) ${direction(props)};
      }
    `
  }
}

const pulseDirection = (props) => {
  if (props.right) {
    return '.2rem'
  } else if (props.left) {
    return '-.2rem'
  }
}

const animated = (props) => css`
  ${pulse(props)} 0.75s infinite
`

const direction = (props) => {
  if (props.down) {
    return 'rotate(0deg)'
  } else if (props.left) {
    return 'rotate(90deg)'
  } else if (props.right) {
    return 'rotate(-90deg)'
  } else if (props.up) {
    return 'rotate(180deg)'
  }
}

const Chevron = styled(BaseChevron)`
  width: 16px;
  height: 8px;
  fill: none;
  stroke: ${props => props.theme.colors.navy};
  stroke-miterlimit: 10;
  stroke-width: 4px;
  ${props => `transform: ${direction(props)};`}
  cursor: pointer;
  animation: ${props => props.animated ? animated : ''};
  margin: 10px;

  &:hover {
    polyline {
      stroke-width: 7px;
    }
  }
`

const validateDirection = (props, propName, componentName) => {
  const trueDirections = ['down', 'left', 'right', 'up'].filter(
    direction => props[direction] === true
  )
  if (!props.ignoreErrors && (trueDirections.length > 1)) {
    return new Error(`More than one direction prop was supplied to ${componentName}, only use one.`)
  } else if (!props.ignoreErrors && trueDirections.length === 0) {
    return new Error(`No direction prop was supplied to ${componentName}, please select one.`)
  }
  return null
}

Chevron.propTypes = {
  animated: PropTypes.bool,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string.isRequired
    })
  }),
  ignoreErrors: PropTypes.bool,
  validateDirection
}

Chevron.defaultProps = {
  ignoreErrors: false
}

/** @component */
export default Chevron
export {
  animated,
  BaseChevron,
  direction,
  pulse,
  pulseDirection,
  validateDirection
}
