import React from 'react'
import PropTypes from 'prop-types'

const OS_FULL_TEXT = 'One Size'

const QuickAddSize = ({
  checked = false,
  children,
  className,
  id,
  input = {}
}) => {
  let label = ''
  if (children === 'OS') {
    label = OS_FULL_TEXT
  } else {
    label = children
  }
  return (
    <div className={className}>
      <input id={input.name} type='checkbox'
      {...input}
      checked={checked} />
      <label for={input.name}>{label}</label>
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
