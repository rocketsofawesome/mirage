import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const BaseChevron = ({animated, down, left, right, up, ...props}) => {
  return (
    <svg viewBox='0 0 48 24.12' {...props}>
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
        transform: translateY(-2px) ${direction(props)};
      }
      100% {
        transform: translateY(0px) ${direction(props)};
      }
    `
  }
}

const pulseDirection = (props) => {
  if (props.right) {
    return '2px'
  } else if (props.left) {
    return '-2px'
  }
}

const animated = css`
  animation: ${props => `${pulse(props)} 0.75s infinite`};}
`

const direction = (props) => {
  if (props.down) {
    return 'rotate(0deg)'
  } else if (props.right) {
    return 'rotate(90deg)'
  } else if (props.left) {
    return 'rotate(-90deg)'
  } else if (props.up) {
    return 'rotate(180deg)'
  }
}

const Chevron = styled(BaseChevron)`
  width: 12px;
  height: 8px;
  fill:none;
  stroke: ${props => props.theme.colors.rocketBlue};
  stroke-miterlimit:10;
  stroke-width:5px;
  ${props => `transform: ${direction(props)};`}
  cursor: pointer;
  ${props => props.animated ? animated : ''}
`

const validateDirection = (props, propName, componentName) => {
  const directions = ['down', 'left', 'right', 'up']
  const propDirections = Object.keys(props).filter((key) => {
    return directions.includes(key)
  })
  if (propDirections.length > 1) {
    return new Error(`More than one direction prop was supplied to ${componentName}, only use one.`)
  } else if (propDirections.length === 0) {
    return new Error(`No direction prop was supplied to ${componentName}, please select one.`)
  }
  //   return new Error(`Both the left and right prop were supplied to ${componentName}, only use one.`)
  // }
}

Chevron.propTypes = {
  animated: PropTypes.bool,
  down: validateDirection,
  left: validateDirection,
  right: validateDirection,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string.isRequired
    })
  }),
  up: validateDirection
}

Chevron.defaultProps = {

}

/** @component */
export default Chevron


// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
