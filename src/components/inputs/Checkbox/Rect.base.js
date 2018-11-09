import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

const fillOut = keyframes`
  from {
    fill: rgba(0,115,209, 1.0);
  }
  to {
    fill: rgba(255, 255, 255, 0);
  }
`

const fillIn = keyframes`
  from {
    fill: rgba(255, 255, 255, 0);
  }
  to {
    fill: rgba(0,115,209, 1.0);
  }
`

const checked = css`
  animation: ${fillIn} 0.25s linear forwards;

  fill: stroke: ${props => props.theme.colors.rocketBlue};
`

const unchecked = css`
  animation: ${fillOut} 0.25s linear forwards;

  stroke: transparent;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dashoffset: 200;
  fill: none;
`

const Rect = ({ className }) => {
  return (
    <rect className={className} x='2.5' y='2.5' width='185' height='185' rx='10' ry='10' />
  )
}

const StyledRect = styled(Rect)`
  ${props => props.checked ? checked : unchecked }

  stroke: ${props => props.theme.colors.rocketBlue};
  stroke-width: 20;
  stroke-linecap: round;
`

StyledRect.propTypes = {
  checked: PropTypes.bool,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  })
}

export default StyledRect
export { checked, Rect, unchecked }
