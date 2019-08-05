import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

const Rect = ({ className }) => {
  return (
    <rect className={className} x='2.5' y='2.5' width='185' height='185' rx='10' ry='10' />
  )
}

const StyledRect = styled(Rect)`
  fill: none;

  stroke: ${props => props.theme.colors.rocketBlue};
  stroke-width: 20;
  stroke-linecap: round;
`

StyledRect.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  })
}

export default StyledRect
export { Rect }
