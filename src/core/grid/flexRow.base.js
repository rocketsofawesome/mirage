import React from 'react'
import PropTypes from 'prop-types'

const BaseFlexRow = ({ children, element, ...props }) => {
  delete props.constrained
  delete props.padding
  return React.createElement(element, props, children)
}

BaseFlexRow.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default BaseFlexRow
