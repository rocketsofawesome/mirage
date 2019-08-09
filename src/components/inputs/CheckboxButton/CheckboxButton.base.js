import React from 'react'
import PropTypes from 'prop-types'

const BaseCheckboxButton = ({className, input, children}) => {
  return (
    <label className={className}>
      <input type='checkbox' {...input} />
      <div className='button'>{children}</div>
    </label>
  )
}

BaseCheckboxButton.propTypes = {
  children: PropTypes.node,
  input: PropTypes.object.isRequired
}

export default BaseCheckboxButton
