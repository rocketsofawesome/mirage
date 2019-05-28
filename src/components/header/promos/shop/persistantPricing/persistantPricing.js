import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import { P } from 'SRC'

const rotateWordsFirst = keyframes`
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  2% {
    opacity: 0;
    transform: translateY(-30px);
  }
  5% {
    opacity: 0.7;
    transform: translateY(0rem);
  }
  9% {
    opacity: 1;
    transform: translateY(0rem);
  }
  34% {
    opacity: 0.7;
    transform: translateY(0rem);
  }
  37% {
    opacity: 0;
    transform: translateY(30px);
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const childStyle = (index) => {
  return (css`
    &:nth-of-type(${index}) {
      animation-delay: ${props => props.duration * index}s;
    }
  `)
}

const PersistantPricing = styled(({className, children}) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  )
})`
width: 100%;
  div {
    height: ${props => props.height/10}rem;
    position: relative;
    overflow: hidden;
    > * {
      line-height: ${props => props.height/10}rem;
      animation: ${rotateWordsFirst} ${props => (props.children.length * props.duration)}s linear infinite 0s;
      position: absolute;
      opacity: 0;
      display: inline-flex;
      justify-content: center;
      width: 100%;
      height: ;
      ${props => props.children.map((child, index) => {
        return childStyle(index)
      })}
    }
    span {
      margin-left: 0.5rem;
    }
    ${P} {
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
  duration: 4,
  height: 30
}

/** @component */
export default PersistantPricing
