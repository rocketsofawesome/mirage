import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const UnstyledMailbox = ({className}) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 148 148'>
      <g className='mailbox'>
        <path className='body' d='M64.15,54.44c1.5-.69,45.25,2.25,60.25,3.18,23,3.76,22.31,29.88,22.31,29.88v22.31l-83.63.69-17.37,1,.5-38.12C46.4,70.44,48.52,54.81,64.15,54.44Z'/>
        <line className='line' x1='83.21' y1='148' x2='84.08' y2='110.33'/>
        <line className='line' x1='89.9' y1='148' x2='90.46' y2='110.33'/>
        <line className='line' x1='109.71' y1='148' x2='111.89' y2='110.1'/>
        <path className='face' d='M123.81,57.5c-9.27,0-20.75,14.33-20.75,28.94v23.89l43.65-.52s-.58-14.56,0-23.48C147.9,68,133.09,57.5,123.81,57.5Zm-8.33,22.08c0-3.26,2-6.41,4.25-6.41S124,76.32,124,79.58s-2.29,5.92-4.5,5.92S115.48,82.85,115.48,79.58Zm9.86,23.23c-5.61.16-6.24-5.51-6.48-10.9l2.44-.13s0,7.72,3.76,8c4.94.44,4.34-8,4.34-8l1.78.22C131.87,94.81,132,102.62,125.34,102.81Zm7.18-17.64c-2.05,0-4.71-2.52-4.71-5.84s2.66-6.16,4.71-6.16,4.38,2.85,4.38,6.16S134.57,85.17,132.52,85.17Z'/>
        <circle className='iris002' cx='118.33' cy='80.44' r='1.19'/>
        <circle className='iris003' cx='130.46' cy='79.88' r='1.31'/>
      </g>
      <g className='flag'>
        <path className='outterCircle' d='M75.57,76.42a7.39,7.39,0,0,0-5.82,1.81A9.33,9.33,0,0,0,67.07,83h1a8.52,8.52,0,0,1,2.32-4,6.15,6.15,0,0,1,4.25-1.59,7.26,7.26,0,0,1,.8,0c3.36.33,9,2.39,9,8,0,3.64-4.86,8.12-8.81,8.12A8.17,8.17,0,0,1,68,87.23H67a9.2,9.2,0,0,0,8.76,7.33c4.49,0,9.81-4.94,9.81-9.12C85.52,79.88,80.52,76.91,75.57,76.42Z'/>
        <circle cx='76.63' cy='85.43' r='3.67'/>
        <polyline className='flag-portion' points='73.83 83.05 7.69 82.21 7.69 105.03 23.93 105.54 24.02 86.54 67.27 87.22 73.47 87.31'/>
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

  .line, .flag circle, .flag .flag-portion, .body {
    fill: none;
    stroke: ${props => props.theme.colors.rocketBlue};
    stroke-miterlimit: 10;
  }

  .face, .iris, .outterCircle {
    fill: ${props => props.theme.colors.rocketBlue};
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
