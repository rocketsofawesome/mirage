import React from 'react'
import PropTypes from 'prop-types'

const BaseFlexCol = ({ element, children, key, ...props}) => {
  delete props.columns
  delete props.desktop
  delete props.mobile
  delete props.tablet
  delete props.nested
  return React.createElement(element, props, children)
}

BaseFlexCol.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.func
  ]),
  children: PropTypes.node
}

export default BaseFlexCol
