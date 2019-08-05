import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

const BaseCheck  = ({ className }) => {
  return (
    <polyline className={className} points='38.75 98.75 77.75 134.75 151.25 55.25' />
  )
}

const Check = styled(BaseCheck)`
  fill: none;
  stroke-width: 20;
  stroke-linecap: round;
  stroke: ${props => props.theme.colors.white};
`

Check.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

export default Check
export { BaseCheck }
