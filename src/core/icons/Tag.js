import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.svg`
  fill: ${props => props.theme.colors.rocketBlue};
  width: ${(props) => props.width};
`

const Tag = (props) => {
  return (
    <StyledTag viewBox='0 0 525.153 525.153' {...props} >
      <path d={`M509.682,251.504L273.342,15.251C263.933,5.777,250.76,0,236.341,
      0H52.471C23.632,0,0,23.632,0,52.471v183.847c0,14.42,5.777,27.592,15.47,
      37.308l236.34,236.253c9.409,9.497,22.582,15.273,37.001,15.273c14.42,0,
      27.592-5.777,37.001-15.47l183.847-183.847c9.715-9.431,15.492-22.603,
      15.492-37.023S519.091,261.001,509.682,251.504z M91.88,131.288c-21.75,
      0-39.408-17.571-39.408-39.408c0-21.75,17.658-39.408,39.408-39.408c21.838,
      0,39.408,17.658,39.408,39.408C131.288,113.717,113.717,131.288,91.88,
      131.288z`} />
    </StyledTag>
  )
}

Tag.defaultProps = {
  width: '1.2rem'
}

Tag.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string
}

export default Tag
