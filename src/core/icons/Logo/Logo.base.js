import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

const UnstyledBaseLogo = ({className, ...props}) => {
  delete props.animated
  delete props.maxWidth
  return (
      <svg className={className} viewBox='0 0 492 60' {...props}>
        <path className='letter letter-r' d='M52.6,39.4l-4.1-8.1h-3.6v8.1H42V20.2h7.5c3.6,0,6,2.4,6,5.6c0.1,2.4-1.5,4.5-3.8,5.1l4.4,8.5L52.6,39.4z
          M49.2,22.8h-4.3v6h4.3c2,0,3.3-1.1,3.3-3C52.5,24,51.2,22.8,49.2,22.8z'/>
        <path className='letter letter-o' d='M78,37.7c-2.8,2.8-7.3,2.8-10.1,0c-1.9-1.9-1.8-4-1.8-7.7c0-3.7,0-5.8,1.8-7.8c2.8-2.8,7.3-2.8,10.1,0
          c1.9,1.9,1.8,4,1.8,7.7S79.8,35.8,78,37.7z M75.7,24c-1.6-1.6-4.1-1.6-5.7,0l0,0c-1,1-1.2,2.1-1.2,6s0.2,5,1.2,6
          c1.6,1.6,4.1,1.6,5.7,0l0,0c1-1,1.1-2.1,1.1-6S76.7,25.1,75.7,24z'/>
        <path className='letter letter-c' d='M104.1,26.1h-3c-0.1-0.8-0.4-1.5-1-2.1c-1.6-1.6-4.1-1.6-5.7,0l0,0c-1,1-1.2,2.1-1.2,6s0.2,5,1.2,6
          c1.6,1.6,4.1,1.6,5.7,0l0,0c0.6-0.6,0.9-1.3,1-2.1h3c-0.2,1.6-0.6,2.8-1.7,3.9c-2.8,2.8-7.3,2.8-10.1,0c-1.9-1.9-1.9-4-1.9-7.7
          s0-5.8,1.9-7.7c2.8-2.8,7.3-2.8,10.1,0C103.5,23.4,103.9,24.6,104.1,26.1'/>
        <path className='letter letter-k' d='M126.5,39.6l-5.4-9.5l-3.2,3.9v5.6h-2.9V20.4h2.9V30l7.9-9.7h3.6l-6.2,7.6l6.9,11.7H126.5z'/>
        <polygon className='letter letter-e' points='142.9,23.1 152.3,23.1 152.3,20.5 140,20.5 140,20.5 140,39.7 142.6,39.7 152.3,39.7 152.3,37.1
          142.9,37.1 142.9,31.4 151.4,31.4 151.4,28.8 142.9,28.8 142.9,28.7'/>
        <polygon className='letter letter-t' points='162.3,20.4 162.3,23.1 167.7,23.1 167.7,39.7 170.5,39.7 170.5,23.1 175.8,23.1 175.8,20.4'/>
        <path className='letter letter-s' d='M191.6,39.8c-2.9,0-5-0.7-6.8-2.6l2-1.9c1.4,1.4,3,1.8,4.9,1.8c2.5,0,4-1.1,4-3c0-0.8-0.2-1.5-0.8-2
          c-0.5-0.4-1-0.6-2.1-0.8l-2.3-0.4c-1.4-0.1-2.6-0.7-3.6-1.6c-1-0.9-1.4-2.1-1.4-3.7c0-3.3,2.4-5.6,6.4-5.6c2.6,0,4.3,0.6,6,2.2
          l-1.9,1.8c-1.2-1.1-2.6-1.5-4.2-1.5c-2.3,0-3.5,1.3-3.5,3c0,0.7,0.2,1.3,0.7,1.8c0.6,0.5,1.4,0.8,2.2,0.9l2.2,0.3
          c1.8,0.3,2.8,0.7,3.6,1.4c1,0.9,1.6,2.3,1.6,4C198.5,37.7,195.6,39.8,191.6,39.8z'/>
        <path className='letter letter-o' d='M234.3,37.7c-2.8,2.8-7.3,2.8-10.1,0c-1.9-1.9-1.9-4-1.9-7.7s0-5.8,1.9-7.7c2.8-2.8,7.3-2.8,10.1,0
          c1.9,1.9,1.8,4,1.8,7.7S236.2,35.8,234.3,37.7z M232.1,24c-1.6-1.6-4.1-1.6-5.7,0l0,0c-1,1-1.1,2.1-1.1,6s0.2,5,1.1,6
          c1.6,1.6,4.1,1.6,5.7,0l0,0c1-1,1.1-2.1,1.1-6S233,25.1,232.1,24z'/>
        <polygon className='letter letter-f' points='250.3,31.4 258.8,31.4 258.8,28.7 250.3,28.7 250.3,23.1 259.7,23.1 259.7,20.4 247.4,20.4 247.4,39.7
          250.3,39.7'/>
        <path className='letter letter-a' d='M296.6,39.7V30c0-3.7,0-5.8-1.8-7.7c-2.8-2.8-7.3-2.8-10.1,0c-1.9,1.9-1.9,4-1.9,7.7v9.7h2.9V34h8v5.7
          C293.6,39.7,296.6,39.7,296.6,39.7z M285.6,31.4V30c0-3.9,0.2-5,1.1-6c1.6-1.6,4.2-1.6,5.7,0l0,0c1,1,1.1,2.1,1.1,6v1.4H285.6z'/>
        <path className='letter letter-w' d='M322.5,39.7H320l-3.9-13.5l-3.9,13.5h-2.6l-5-19.3h3.1l3.4,13.7l3.9-13.7h2.4l3.9,13.7l3.4-13.7h3.1L322.5,39.7
          z'/>
        <polygon className='letter letter-e' points='340.6,23.1 350,23.1 350,20.4 337.7,20.4 337.7,20.5 337.7,39.7 340.3,39.7 350,39.7 350,37 340.6,37
          340.6,31.4 349.1,31.4 349.1,28.7 340.6,28.7 340.6,28.7'/>
        <path className='letter letter-s' d='M366.4,39.8c-2.9,0-5-0.7-6.8-2.6l2-1.9c1.4,1.4,3,1.8,4.9,1.8c2.5,0,4-1.1,4-3c0-0.8-0.2-1.5-0.8-2
          c-0.5-0.4-1-0.6-2.1-0.8l-2.3-0.3c-1.4-0.1-2.6-0.7-3.6-1.6c-1-0.9-1.4-2.1-1.4-3.7c0-3.4,2.4-5.6,6.4-5.6c2.6,0,4.3,0.6,6,2.2
          l-1.9,1.8c-1.2-1.1-2.6-1.5-4.2-1.5c-2.3,0-3.5,1.3-3.5,3c0,0.7,0.2,1.3,0.7,1.8c0.6,0.5,1.4,0.8,2.2,0.9l2.2,0.3
          c1.8,0.3,2.8,0.7,3.6,1.4c1,0.9,1.6,2.3,1.6,4C373.3,37.7,370.5,39.8,366.4,39.8z'/>
        <path className='letter letter-o' d='M395.7,37.8c-1.4,1.4-3.2,2.1-5.1,2.1c-1.9,0-3.7-0.7-5.1-2c-1.9-1.9-1.9-4-1.9-7.7s0-5.8,1.9-7.7
          c1.3-1.4,3.2-2.1,5.1-2.1c1.9,0,3.8,0.7,5.1,2c1.9,1.9,1.8,4,1.8,7.7S397.6,35.9,395.7,37.8z M393.5,24.1c-1.6-1.6-4.2-1.6-5.7,0
          l0,0c-1,1-1.1,2.1-1.1,6s0.2,5,1.1,6c1.6,1.6,4.1,1.6,5.7,0l0,0c1-1,1.1-2.1,1.1-6S394.4,25.1,393.5,24.1z'/>
        <path className='letter letter-m' d='M422.8,39.7V26.8l-4.4,9.4h-2.2l-4.6-9.4v12.9h-2.9V20.4h2.9l5.6,12l5.5-12h2.9v19.2L422.8,39.7L422.8,39.7z'/>
        <polygon className='letter letter-e' points='440.5,23.1 449.9,23.1 449.9,20.4 437.6,20.4 437.6,20.5 437.6,39.7 440.2,39.7 449.9,39.7 449.9,37
          440.5,37 440.5,31.4 449,31.4 449,28.7 440.5,28.7 440.5,28.7'/>
      </svg>
  )
}

const pulse = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`

const animated = css`
  > * {
    animation-name: ${pulse};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transform-origin: center;
    &:nth-child(1) {
      animation-delay: -2.8125s;
    }
    &:nth-child(2) {
      animation-delay: -2.625s;
    }
    &:nth-child(3) {
      animation-delay: -2.4375s;
    }
    &:nth-child(4) {
      animation-delay: -2.25s;
    }
    &:nth-child(5) {
      animation-delay: -2.0625s;
    }
    &:nth-child(6) {
      animation-delay: -1.875s;
    }
    &:nth-child(7) {
      animation-delay: -1.6875s;
    }
    &:nth-child(8) {
      animation-delay: -1.5s;
    }
    &:nth-child(9) {
      animation-delay: -1.3125s;
    }
    &:nth-child(10) {
      animation-delay: -1.125s;
    }
    &:nth-child(11) {
      animation-delay: -0.9375s;
    }
    &:nth-child(12) {
      animation-delay: -0.75s;
    }
    &:nth-child(13) {
      animation-delay: -0.5625s;
    }
    &:nth-child(14) {
      animation-delay: -0.375s;
    }
    &:nth-child(15) {
      animation-delay: -0.1875s;
    }
    &:nth-child(16) {
      animation-delay: 0s;
    }
  }
`

const BaseLogo = styled(UnstyledBaseLogo)`
  width: 100%;

  ${props => props.theme.breakpointsVerbose.belowTablet`
    width: 160px;
  `}

  max-width: ${props => props.maxWidth};
  ${props => props.animated ? animated : ''}
`

BaseLogo.propTypes = {
  maxWidth: PropTypes.string
}

BaseLogo.defaultProps = {
  maxWidth: '36rem'
}

/** @component */
export default BaseLogo
export { UnstyledBaseLogo }
