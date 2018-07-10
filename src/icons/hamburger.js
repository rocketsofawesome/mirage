import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const animateToX = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -322;
  }
`

const animateFromX = keyframes`
  0% {
    stroke-dashoffset: -322;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

const removeCenterLine = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const addCenterLine = keyframes`
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
`

const animateCenterLine = keyframes`
  33.3333333333%, 66.6666666666% {
    opacity: 0;
  }
  0%, 100% {
    opacity: 1;
  }
`

const animateX = keyframes`
  0%, 100% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: -322;
  }
`

const animated = css`
  .line {
    stroke-dashoffset: 0;
  }
  .hamburger-outerline {
    animation: ${animateX} 2s ease-in-out infinite;
  }
  .hamburger-innerline {
    animation: ${animateCenterLine} 2s ease-in-out infinite;
  }
`

const closed = css`
  .line {
    stroke-dashoffset: 0;
  }
  .hamburger-outerline {
    animation: ${animateFromX} 1s ease-in-out;
  }
  .hamburger-innerline {
    animation: ${addCenterLine} 1s ease-in-out;
  }
`

const open = css`
  .hamburger-outerline {
    animation: ${animateToX} 1s ease-in-out;
    stroke-dashoffset: -322;
  }
  .hamburger-innerline {
    animation: ${removeCenterLine} 1s ease-in-out;
    stroke-dashoffset: 125;
  }
`

const colorStroke = (strokeColor) => {
  switch(strokeColor){
    default:
      return css`
        stroke: ${props => props.theme.colors.rocketBlue};
      `
    case 'white':
      return css`
        stroke: ${props => props.theme.colors.white};
      `
      case 'navy':
        return css`
          stroke: ${props => props.theme.colors.navy};
        `
  }
}

const StyledHamburger = styled.svg`
  width: 3em;
  height: 3em;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;

.line {
  fill:none;
  stroke-linecap:round;
  stroke-miterlimit:10;
  stroke-width: 8;
  ${props => colorStroke(props.strokeColor)}
}

//Closed
${props => !props.open && props.open !== undefined && closed}

//Open
${props => props.open && open}

//Animated
${props => props.animated && animated}


.hamburger-innerline {
  stroke-dasharray:125;
}
.hamburger-outerline {
  stroke-dasharray:100 322;
}
`

StyledHamburger.propTypes = {
  open: PropTypes.bool,
  animated: PropTypes.bool
}

StyledHamburger.defaultProps = {
  strokeColor: 'blue'
}

const topPoints = `M2,74.21H102c51.54,1.7,72.86-35.69,59.31-58.6S93.4-3.52,
89.36,69.35L18.64,140.06`
const bottomPoints = `M2,138.79H102c51.54-1.7,72.86,35.69,59.31,58.6s-67.91,
19.13-72-53.74L18.64,72.94`

const Hamburger = (props) => {
  return (
    <StyledHamburger
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 167.29 210.66'>
    <path
      className='line hamburger-outerline'
      d={topPoints} />
    <line
      className='line hamburger-innerline'
      x1='2'
      y1='105.54'
      x2='102'
      y2='105.54'/>
    <path
      className='line hamburger-outerline'
      d={bottomPoints} />
    </StyledHamburger>
  )
}

/** @component */
export default Hamburger
