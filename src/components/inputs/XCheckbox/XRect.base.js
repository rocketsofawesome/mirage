import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const XRect = ({ className }) => {
  return (
    <rect className={className} x='2.5' y='2.5' width='185' height='185' rx='10' ry='10' />
  )
}

const StyledXRect = styled(XRect)`
  fill: none;
  stroke: ${props => props.theme.colors.rocketBlue};
  stroke-width: 10;
  stroke-linecap: round;
`

StyledXRect.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  })
}

export default StyledXRect
export { XRect }
