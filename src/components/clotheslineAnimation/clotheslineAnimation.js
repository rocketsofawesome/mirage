import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Clothesline } from 'SRC'

const move = keyframes`
0% {
  transform: translateX(0%);
}
5% {
  transform: translateX(-10%);
}
10% {
  transform: translateX(-10%);
}
15% {
  transform: translateX(-20%);
}
20% {
  transform: translateX(-20%);
}
25% {
  transform: translateX(-30%);
}
30% {
  transform: translateX(-30%);
}
35% {
  transform: translateX(-40%);
}
40% {
  transform: translateX(-40%);
}
45% {
  transform: translateX(-50%);
}
50% {
  transform: translateX(-50%);
}
55% {
  transform: translateX(-60%);
}
60% {
  transform: translateX(-60%);
}
65% {
  transform: translateX(-70%);
}
70% {
  transform: translateX(-70%);
}
75% {
  transform: translateX(-80%);
}
80% {
  transform: translateX(-80%);
}
85% {
  transform: translateX(-90%);
}
90% {
  transform: translateX(-90%);
}
95% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(-100%);
}
`

const ClotheslineAnimation = styled(({className}) => {
  return (
    <div className={className}>
      <Clothesline key={1} />
      <Clothesline key={2} />
      <Clothesline key={3} />
    </div>
  )
})`
position: relative;
overflow: hidden;
white-space: nowrap;
  ${Clothesline} {
    width: 50%;
    animation: ${move} 12s ease infinite;
    ${props => props => props.theme.breakpointsVerbose.aboveTablet`
      width: 100%;
    `}
  }
`

ClotheslineAnimation.propTypes = {

}

/** @component */
export default ClotheslineAnimation
