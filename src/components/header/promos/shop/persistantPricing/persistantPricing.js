import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import { P } from 'SRC'

//SM - I would like for this to be computed based on amount of children passedhead
const animateContainer = keyframes`
  0% {
    transform: translateY(0rem);
  }
  4.167% {
    transform: translateY(3rem);
  }
  29.167% {
    transform: translateY(3rem);
  }
  37.5% {
    transform: translateY(9rem);
  }
  62.5% {
    transform: translateY(9rem);
  }
  70.834%{
    transform: translateY(15rem);
  }
  95.834% {
    transform: translateY(15rem);
  }
  100%{
    transform: translateY(18rem);
  }
  `

const PersistantPricing = styled(({className, children}) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  )
})`
width: 100%;
height: ${props => props.height/10}rem;
position: relative;
overflow: hidden;
  div {
    width: 100%;
    position: absolute;
    bottom: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    animation-name: ${animateContainer};
    animation-duration: ${props => props.duration}s
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
    animation-timing-function: ease-in-out;
    > * {
      flex: 1 1 100%;
      text-align: center;
    }
    span {
      margin-left: 0.5rem;
    }
    ${P} {
      line-height: 3rem;
      padding-top: ${props => (props.height/10)}rem;
      height: ${props => (props.height/10)}rem;
      font-weight: 300;
      font-size: 1.1rem;
      ${props => props.theme.breakpointsVerbose.aboveTablet`
        font-size: 1.6rem;
      `}
    }
  }
`

PersistantPricing.propTypes = {
  height: PropTypes.number,
  children: PropTypes.array
}

PersistantPricing.defaultProps = {
  children: [
    <P key='message1'>Did you know? Buy 4+ Items, Get 20% Off. Every day. <span role='img' aria-label='confetti'>🎉</span></P>,
    <P key='message2'>You’re welcome! Buy 4+ Items, Get 20% Off. Every day. <span role='img' aria-label='crown'>👑</span></P>,
    <P key='message3'>
      We’re about to make your life 20% easier …
      <span role='img' aria-label='smiling face with smiling eyes'>😊</span>
      <span role='img' aria-label='confetti'>🎉</span>
      <span role='img' aria-label='hearts'>💕</span>
    </P>
  ],
  duration: 12,
  height: 30
}

/** @component */
export default PersistantPricing
