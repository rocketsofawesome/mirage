import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AIcon = (props) => {
  return (
    <svg viewBox='0 0 80 80' {...props}>
      <path d='M57.5,64.6V40.1c0-9.4,0.1-14.8-4.7-19.5c-7.2-7-18.5-7-25.6,0c-4.8,4.8-4.8,10.2-4.8,19.5v24.5h7.4V50.3h20.2
        v14.4H57.5z M29.9,43.6V40c0-9.8,0.5-12.5,2.8-15.1c3.9-4,10.5-4,14.5,0l0,0C49.6,27.6,50,30.3,50,40v3.5H29.9z'/>
    </svg>
  )
}

const BaseAIcon = styled(AIcon)`
  width: ${props => props.width};
`

BaseAIcon.propTypes = {
  width: PropTypes.string.isRequired
}

BaseAIcon.defaultProps = {
  width: '5.7142857143em'
}

/** @component */
export default BaseAIcon
