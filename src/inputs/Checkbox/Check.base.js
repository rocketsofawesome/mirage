import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

const Check  = ({ className }) => {
  return (
    <polyline className={className} points='38.75 98.75 77.75 134.75 151.25 55.25' />
  )
}

const dash = keyframes`
  from {
    stroke-dashoffset: 200;
  }
  to {
    stroke-dashoffset: 0;
  }
`

const checked = css`
  animation: ${dash} 0.25s linear forwards;

  stroke: ${props => props.theme.colors.white};
  stroke-dasharray: 200;
  stroke-dashoffset: 0;
`

const StyledCheck = styled(Check)`
  ${props => props.checked ? checked : ''}
  fill: none;
  stroke-width: 20;
  stroke-linecap: round;
  stroke: ${props => props.theme.colors.white};
`

StyledCheck.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

export default StyledCheck
