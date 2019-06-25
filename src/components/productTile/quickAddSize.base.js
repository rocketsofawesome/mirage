import React from 'react'
import PropTypes from 'prop-types'

const QuickAddSize = ({className, id, input = {}, checked = false, children}) => {
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

}

export default QuickAddSize
