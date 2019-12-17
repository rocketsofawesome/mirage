import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseX  = ({ className }) => {
  return (
    <React.Fragment>
      <polyline className={className} points="155,30,30,155" fill="none" stroke="black" />
      <polyline className={className} points="30,30,155,155" fill="none" stroke="black" />
    </React.Fragment>
  )
}

const X = styled(BaseX)`
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  stroke: ${props => props.theme.colors.white};
`

X.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

export default X
export { BaseX }
