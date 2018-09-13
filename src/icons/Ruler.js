import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseIcon = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 12' {...props}>
      <path d='M26,1V11H1V1H26m.5-1H.5A.5.5,0,0,0,0,.5v11a.5.5,0,0,0,
      .5.5h26a.5.5,0,0,0,.5-.5V.5a.51.51,0,0,0-.5-.5Z' />
      <circle cx='4' cy='7.9' r='1.25' />
      <line x1='4' y1='0.5' x2='4' y2='3.5' />
      <line x1='8' y1='0.5' x2='8' y2='3.5' />
      <line x1='12' y1='0.5' x2='12' y2='3.5' />
      <line x1='16' y1='0.5' x2='16' y2='3.5' />
      <line x1='20' y1='0.5' x2='20' y2='3.5' />
      <line x1='24' y1='0.5' x2='24' y2='3.5' />
    </svg>
  )
}

const Ruler = styled(BaseIcon)`
  width: ${props => props.width};
  > path {
    fill: ${props => props.theme.colors.navy};
  }
  > line, circle {
    fill: none;
    stroke-linecap: round;
    stroke: ${props => props.theme.colors.navy};
  }
`

Ruler.propTypes = {
  width: PropTypes.string
}

Ruler.defaultProps = {
  width: '27px'
}
/** @component */
export default Ruler
