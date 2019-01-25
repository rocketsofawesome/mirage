import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const animation = keyframes `
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity 1;
  }
  100% {
    opacity 0;
  }
`

const FadeInOut = styled(({className, children}) => {
  console.log('Are we rendering?')
  return (<div className={className}>{children}</div>)
})`
  animation: ${animation} ${props => props.duration}s ease-in-out ${props => props.iteration};
`

FadeInOut.propTypes = {
  duration: PropTypes.number,
  iteration: PropTypes.string
}

FadeInOut.defaultProps = {
  duration: 5,
  iteration: 'infinite'
}

/** @component */
export default FadeInOut
