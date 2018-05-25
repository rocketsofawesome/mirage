import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

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

const fills = {
  blue: css`
    fill: ${props => props.theme.colors.rocketBlue};
  `,
  navy: css`
    fill: ${props => props.theme.colors.navy};
  `,
  gray: css`
    fill: ${props => props.theme.colors.gray[2]};
  `,
  white: css`
    fill: ${props => props.theme.colors.white};
  `
}

const StyledLogo = styled.svg`
  ${props => props.fill ? fills[props.fill] : fills.blue}
  max-height: ${props => props.size};
  max-width: ${props => props.size};
  width: 100%;
  ${props => props.animated ? animated : ''}
`

const Logo = (props) => {
  return (
    <StyledLogo viewBox='0 0 1020 70' {...props}>
      <path class='letter letter-r' d="M26.6,58.5L16.4,38.3H7.3v20.3H0V10.4h18.7c9.1,0,14.9,5.9,14.9,14.1c0.2,6-3.8,11.3-9.6,12.8l11.1,21.3 L26.6,58.5z M18.1,17H7.3v15.1h10.8c4.9,0,8.2-2.8,8.2-7.5S23,17,18.1,17z"/>
      <path class='letter letter-o' d="M90,54.2c-7.1,6.9-18.3,6.9-25.4,0C59.9,49.5,60,44.1,60,34.9s-0.1-14.6,4.6-19.4c7.1-6.9,18.3-6.9,25.4,0 c4.7,4.7,4.6,10.1,4.6,19.3S94.7,49.5,90,54.2z M84.4,19.9c-3.9-4-10.3-4-14.3,0l0,0c-2.4,2.6-2.9,5.3-2.9,14.9s0.5,12.4,2.9,14.9 c3.9,4,10.3,4,14.3,0l0,0c2.4-2.6,2.8-5.3,2.8-14.9S86.8,22.6,84.4,19.9z"/>
      <path class='letter letter-c' d="M155.5,25.3H148c-0.2-2-1-3.8-2.4-5.3c-3.9-4-10.3-4-14.3,0l0,0c-2.4,2.6-2.9,5.3-2.9,14.9s0.5,12.4,2.9,14.9 c3.9,4,10.3,4,14.3,0l0,0c1.4-1.5,2.2-3.3,2.4-5.3h7.5c-0.4,3.9-1.5,6.9-4.3,9.7c-7.1,6.9-18.3,6.9-25.4,0 c-4.7-4.7-4.7-10.1-4.7-19.3s-0.1-14.6,4.7-19.3c7.1-6.9,18.3-6.9,25.4,0C153.9,18.4,155,21.4,155.5,25.3"/>
      <path class='letter letter-k' d="M211.4,59l-13.5-23.7l-8.1,9.7v14h-7.3V10.9h7.3v24.2l19.7-24.2h8.9l-15.6,18.9L220,59H211.4z"/>
      <polygon class='letter letter-e' points="252.5,17.7 275.9,17.7 275.9,11.1 245.2,11.1 245.2,11.2 245.2,59.2 251.7,59.2 275.9,59.2 275.9,52.7  252.5,52.7 252.5,38.4 273.7,38.4 273.7,31.9 252.5,31.9 252.5,31.7 "/>
      <polygon class='letter letter-t' points="301,11 301,17.6 314.5,17.6 314.5,59.2 321.5,59.2 321.5,17.6 334.9,17.6 334.9,11 "/>
      <path class='letter letter-s' d="M374.5,59.4c-7.2,0-12.5-1.7-17-6.4l4.9-4.8c3.5,3.5,7.4,4.6,12.3,4.6c6.3,0,9.9-2.7,9.9-7.4 c0.1-1.9-0.6-3.7-1.9-5c-1.2-1.1-2.4-1.6-5.3-2l-5.7-0.9c-3.4-0.3-6.6-1.7-9.1-3.9c-2.4-2.2-3.5-5.3-3.5-9.2c-0.1-8.2,6-14,16-14 c6.4,0,10.8,1.6,15,5.5l-4.7,4.6c-3-2.8-6.4-3.7-10.5-3.7c-5.7,0-8.8,3.2-8.8,7.5c-0.1,1.7,0.6,3.3,1.8,4.5c1.6,1.2,3.4,2,5.4,2.2 l5.5,0.8c4.5,0.7,7,1.8,9,3.6c2.6,2.3,3.9,5.8,3.9,9.9C391.8,54.2,384.5,59.4,374.5,59.4z"/>
      <path class='letter letter-o' d="M481.3,54.3c-7.1,6.9-18.3,6.9-25.4,0c-4.7-4.7-4.7-10.1-4.7-19.3s-0.1-14.6,4.7-19.3c7.1-6.9,18.3-6.9,25.4,0 c4.7,4.7,4.6,10.1,4.6,19.3S486,49.6,481.3,54.3z M475.7,20c-3.9-4-10.3-4-14.3,0l0,0c-2.4,2.6-2.8,5.3-2.8,14.9s0.5,12.4,2.8,14.9 c3.9,4,10.3,4,14.3,0l0,0c2.4-2.6,2.8-5.3,2.8-14.9S478.1,22.6,475.7,20z"/>
      <polygon class='letter letter-f' points="521.3,38.4 542.5,38.4 542.5,31.8 521.3,31.8 521.3,17.6 544.8,17.6 544.8,11 514,11 514,59.2  521.3,59.2 "/>
      <path class='letter letter-a' d="M637.1,59.2V35c0-9.3,0.1-14.6-4.6-19.3c-7.1-6.9-18.3-6.9-25.3,0c-4.7,4.7-4.7,10.1-4.7,19.3v24.2h7.3V45h20 v14.2H637.1z M609.8,38.4v-3.5c0-9.7,0.5-12.4,2.8-14.9c3.9-4,10.4-4,14.3,0l0,0c2.4,2.6,2.8,5.3,2.8,14.9v3.5H609.8z"/>
      <path class='letter letter-w' d="M702,59.2h-6.3l-9.8-33.7l-9.7,33.7h-6.4L657.2,11h7.7l8.4,34.4L683,11h5.9l9.7,34.4L707,11h7.7L702,59.2z"/>
      <polygon class='letter letter-e' points="747.4,17.6 770.8,17.6 770.8,11 740.1,11 740.1,11.2 740.1,59.2 746.6,59.2 770.8,59.2 770.8,52.6  747.4,52.6 747.4,38.4 768.6,38.4 768.6,31.8 747.4,31.8 747.4,31.7 "/>
      <path class='letter letter-s' d="M812,59.4c-7.2,0-12.4-1.7-17-6.4l4.9-4.8c3.5,3.5,7.4,4.6,12.3,4.6c6.3,0,9.9-2.7,9.9-7.4 c0.1-1.9-0.6-3.7-1.9-5c-1.2-1.1-2.4-1.6-5.3-2l-5.7-0.8c-3.4-0.3-6.6-1.7-9.1-3.9c-2.4-2.2-3.5-5.3-3.5-9.2 c0-8.4,6.1-14.1,16.1-14.1c6.4,0,10.8,1.6,15,5.5l-4.7,4.6c-3-2.8-6.4-3.7-10.5-3.7c-5.7,0-8.8,3.2-8.8,7.5 c-0.1,1.7,0.6,3.3,1.8,4.5c1.6,1.2,3.4,2,5.4,2.2l5.5,0.8c4.5,0.7,7,1.8,9,3.6c2.6,2.3,3.9,5.8,3.9,9.9 C829.3,54.2,822.1,59.4,812,59.4z"/>
      <path class='letter letter-o' d="M885.2,54.4c-3.4,3.4-7.9,5.3-12.7,5.2c-4.7,0.1-9.3-1.8-12.7-5.1c-4.7-4.7-4.7-10.1-4.7-19.3 s-0.1-14.6,4.7-19.3c3.3-3.4,7.9-5.3,12.7-5.2c4.8-0.1,9.4,1.8,12.7,5.1c4.7,4.7,4.6,10.1,4.6,19.3S890,49.7,885.2,54.4z M879.7,20.1c-4-4-10.4-4-14.3,0c0,0,0,0,0,0c-2.4,2.6-2.8,5.3-2.8,15s0.5,12.4,2.8,14.9c3.9,4,10.3,4,14.3,0c0,0,0,0,0,0 c2.4-2.6,2.8-5.3,2.8-14.9S882,22.7,879.7,20.1z"/>
      <path class='letter letter-m' d="M953.1,59.2V27L942,50.5h-5.4L925.2,27v32.2h-7.3V11h7.3l14.1,30l13.8-30h7.3v48.1L953.1,59.2L953.1,59.2z"/>
      <polygon class='letter letter-e' points="997.4,17.6 1020.9,17.6 1020.9,11 990.1,11 990.1,11.2 990.1,59.2 996.7,59.2 1020.9,59.2 1020.9,52.6  997.4,52.6 997.4,38.4 1018.6,38.4 1018.6,31.8 997.4,31.8 997.4,31.7 "/>
    </StyledLogo>
  )
}

Logo.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string
}

Logo.defaultProps = {
  size: '384px'
}

/** @component */
export default Logo
