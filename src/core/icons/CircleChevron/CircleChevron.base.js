import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CircleChev = ({className, left, right}) => {
  return (
    <svg className={className} viewBox='0 0 60 60'>
      <ellipse cx='30' cy='30' rx='30' ry='30' />
      {right && <polyline className='right' points='23.5,16.8 36.5,30 23.5,43.2' />}
      {left && <polyline className='left' points='36.5,43.2 23.5,30 36.5,16.8' />}
    </svg>
  )
}

const BaseChevron = styled(CircleChev)`
  width: ${props => props.width};
  polyline {
    stroke-linecap: round;
    fill: none;
  }
`


const validateDirection = (props, propName, componentName) => {
  if (!props.left && !props.right) {
    return new Error(`Either the left or right prop must be supplied to ${componentName}.`)
  } else if (props.left && props.right) {
    return new Error(`Both the left and right prop were supplied to ${componentName}, only select one.`)
  }
  return null
}

CircleChev.propTypes = {
  className: PropTypes.string,
  left: validateDirection,
  right: validateDirection,
  width: PropTypes.string
}

CircleChev.defaultProps = {
  width: '4rem'
}

/** @component */
export default BaseChevron
export { CircleChev, validateDirection }
