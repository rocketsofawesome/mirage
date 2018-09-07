import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseIcon = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15 15' {...props}>
      <line x1='0' y1='0' x2='15' y2='15' />
      <line x1='0' y1='15' x2='15' y2='0' />
    </svg>
  )
}

const XIcon = styled(BaseIcon)`
  width: ${props => props.width};
  line {
    stroke-width: 1.5;
    fill: none;
    stroke: ${props => props.theme.colors.rocketBlue};
  }
`

XIcon.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  }),
  width: PropTypes.string
}

XIcon.defaultProps = {
  width: '10px'
}

/** @component */
export default XIcon
