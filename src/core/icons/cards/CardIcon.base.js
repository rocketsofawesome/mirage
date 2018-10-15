import React from 'react'
import PropTypes from 'prop-types'

const BaseCardIcon = ({className, children, box}) => {
  return (
    <svg className={className} version='1.1' xmlns="http://www.w3.org/2000/svg" viewBox={box}>
      {children}
    </svg>
  )
}

BaseCardIcon.propTypes = {
  box: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
}

export default BaseCardIcon
