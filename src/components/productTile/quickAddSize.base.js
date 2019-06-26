import React from 'react'
import PropTypes from 'prop-types'

const QuickAddSize = ({
  checked = false,
  children,
  className,
  id,
  input = {}
}) => {
  return (
    <div className={className}>
      <input id={input.name} type='checkbox'
      {...input}
      checked={checked} />
      <label for={input.name}>{children}</label>
    </div>
  )
}

QuickAddSize.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  input: PropTypes.input
}

export default QuickAddSize
