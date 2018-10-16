import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const UnstyledMailbox = ({className}) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 148 148'>
      <g className='mailbox'>
        <path className='line' d='M64.15,54.44c1.5-.69,45.25,2.25,60.25,3.18,23,3.76,22.31,29.88,22.31,29.88v22.31l-83.63.69-17.37,1,.5-38.12C46.4,70.44,48.52,54.81,64.15,54.44Z'/>
        <line className='line' x1='83.21' y1='148' x2='84.08' y2='110.33'/>
        <line className='line' x1='89.9' y1='148' x2='90.46' y2='110.33'/>
        <line className='line' x1='109.71' y1='148' x2='111.89' y2='110.1'/>
        <path className='face' d='M146.71,86.33c-.58,8.92,0,23.48,0,23.48l-43.65.52V86.44c0-14.61,11.48-28.94,20.75-28.94S147.9,68,146.71,86.33Z'/>
        <path className='eye left' d='M124,79.58c0,3.27-2.29,5.92-4.5,5.92s-4-2.65-4-5.92,2-6.41,4.25-6.41S124,76.32,124,79.58Z'/>
        <path className='eye right' d='M136.9,79.33c0,3.32-2.33,5.84-4.38,5.84s-4.71-2.52-4.71-5.84,2.66-6.16,4.71-6.16S136.9,76,136.9,79.33Z'/>
        <path className='mouth' d='M121.3,91.78s0,7.72,3.76,8c4.94.44,4.34-8,4.34-8l1.78.22c.69,2.81.82,10.62-5.84,10.81-5.61.16-6.24-5.51-6.48-10.9l2.44-.13'/>
        <circle className='iris left' cx='118.33' cy='80.44' r='1.19'/>
        <circle className='iris right' cx='130.46' cy='79.88' r='1.31'/>
      </g>
      <g className='flag'>
        <path d='M75.52,76.92c4.27.42,9.5,3,9.5,8.5C85,89.29,80,94,75.71,94a8.66,8.66,0,0,1-8.44-8.66C67.27,81.51,69.83,76.36,75.52,76.92Z'/>
        <polyline points='73.83 83.05 7.69 82.21 7.69 105.03 23.93 105.54 24.02 86.54 73.47 87.31'/>
        <circle cx='76.63' cy='85.43' r='3.67'/>
      </g>
    </svg>
  )
}

const animateFlag = keyframes`
  0% {
    transform: rotate(0deg);
  }
  26% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(90deg);
  }
  33% {
    transform: rotate(100deg);
  }
  36% {
    transform: rotate(80deg);
  }
  37% {
    transform: rotate(95deg);
  }
  39% {
    transform: rotate(85deg);
  }
  40% {
    transform: rotate(90deg);
  }
  70% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const animated = css`
  animation: ${animateFlag};
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`

const MailboxIcon = styled(UnstyledMailbox)`
  width: ${props => props.width};
  .line {
    fill: none;
  }

  .line, .flag > * {
    stroke: ${props => props.theme.colors.rocketBlue};
    stroke-miterlimit: 10;
  }

  .face, .iris {
    fill: ${props => props.theme.colors.rocketBlue};
  }

  .mouth, .eye, .flag > * {
    fill: ${props => props.theme.colors.white};
  }

  .flag {
    transform: rotate(90deg);
    transform-origin: 51.775% 57.726%;
    ${props => props.animate && animated}
  }
`

MailboxIcon.propTypes = {
  animated: PropTypes.bool,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  }),
  width: PropTypes.string,
}

MailboxIcon.defaultProps = {
  width: '7rem'
}

/** @component */
export default MailboxIcon
