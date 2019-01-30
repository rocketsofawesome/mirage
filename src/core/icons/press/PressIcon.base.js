import React from 'react'
import PropTypes from 'prop-types'

const BasePressIcon = ({className, children, box, ...props}) => {
  return (
    <svg className={className} version='1.1' xmlns="http://www.w3.org/2000/svg" viewBox={box} onClick={props.onClick}>
      {children}
    </svg>
  )
}

BasePressIcon.propTypes = {
  box: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
}

export default BasePressIcon
