import React from 'react'
import styled from 'styled-components'

const StyledBagIcon = styled.svg`
  > polygon, path {
    fill: none;
    stroke: ${props => props.theme.colors.rocketBlue};
    stroke-linecap:round;
    stroke-linejoin:round;
  }
  > g circle {
    fill: ${props => props.theme.colors.rocketBlue};
  }
  > g text {
    fill: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 10px;
    font-weight: 500;
  }
`

const BagIcon = (props) => {
  return (
    <StyledBagIcon version='1.1' viewBox='0 0 19 15' {...props}>
      <polygon points='10.5,12.7 10.6,6.8 0.5,6.8 0.5,12.7 2.6,14.5 8.7,14.5'/>
      <path d='M3.1,6.4v-1C3.1,4.1,4.2,3,5.5,3s2.4,1.1,2.4,2.4v1H3.1z'/>
      {props.count &&
        <g>
          <circle cx='13' cy='6' r='6'/>
          <text x='12.75' y='7' alignmentBaseline='middle' textAnchor='middle'>{props.count}</text>
        </g>
      }
    </StyledBagIcon>
  )
}

/** @component */
export default BagIcon
