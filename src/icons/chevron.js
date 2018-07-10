import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const pulse = (direction) => {
  return keyframes`
  0% {
    transform: translateX(0px) ${rotate(direction)};
  }
  50% {
    transform: translateX(${pulseDirection(direction)}) ${rotate(direction)};
  }
  100% {
    transform: translateX(0px) ${rotate(direction)};
  }
`
}

const pulseDirection = (direction) => {
  if (direction === 'right') {
    return '2px'
  } else if (direction === 'left') {
    return '-2px'
  }
}
const rotate = (direction) => {
  if (direction === 'right') {
    return 'rotate(90deg)'
  } else if (direction === 'left') {
    return 'rotate(-90deg)'
  }
}

const animated = css`
  animation: ${props => `${pulse(props.direction)} 0.5s infinite`};}
`

const StyledChevron = styled.svg`
  width: 12px;
  height: 8px;
  fill:none;
  stroke: ${props => props.theme.colors.rocketBlue};
  stroke-miterlimit:10;
  stroke-width:5px;
  transform: ${props => rotate(props.direction)};
  cursor: pointer;
  ${props => props.animated ? animated : ''}
`

const Chevron = (props) => {
  return (
    <StyledChevron viewBox='0 0 48 24.12' {...props} >
      <polyline points='1 1 24 22.75 47 1' />
    </StyledChevron>
  )
}

Chevron.propTypes = {
  animated: PropTypes.bool,
  direction: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string.isRequired
    })
  })
}

/** @component */
export default styled(Chevron)``


// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
