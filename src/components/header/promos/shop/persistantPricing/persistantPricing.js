import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { P } from 'SRC'

//SM - I would like for this to be computed based on amount of children passedhead
// For two messages:
const animateContainer = keyframes`
  0% {
    transform: translateY(0px);
  }
  10% {
    transform: translateY(20px);
  }
  40% {
    transform: translateY(20px);
  }
  60% {
    transform: translateY(60px);
  }
  90% {
    transform: translateY(60px);
  }
  100%{
    transform: translateY(80px);
  }
  `

// For three messages:
  // const animateContainer = keyframes`
  //   0% {
  //     transform: translateY(0px);
  //   }
  //   4.167% {
  //     transform: translateY(30px);
  //   }
  //   29.167% {
  //     transform: translateY(30px);
  //   }
  //   37.5% {
  //     transform: translateY(90px);
  //   }
  //   62.5% {
  //     transform: translateY(90px);
  //   }
  //   70.834%{
  //     transform: translateY(150px);
  //   }
  //   95.834% {
  //     transform: translateY(150px);
  //   }
  //   100%{
  //     transform: translateY(180px);
  //   }
    // `

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
box-sizing: border-box;
& * {
  box-sizing: border-box;
}
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
    animation-delay:  0.01s;
    > * {
      flex: 1 1 100%;
      text-align: center;
    }
    span {
      margin-left: 0.5rem;
    }
    ${P} {
      line-height: 2rem;
      padding-top: ${props => (props.height/10)}rem;
      height: ${props => (props.height/10)*2}rem;
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
    <P key='message1'>Did you know? Buy 6+ Items, Get 25% Off. Every day. <span role='img' aria-label='confetti'>🎉</span></P>,
    <P key='message2'>You’re welcome! Buy 6+ Items, Get 25% Off. Every day. <span role='img' aria-label='crown'>👑</span></P>
  ],
  duration: 12,
  height: 20
}

/** @component */
export default PersistantPricing
