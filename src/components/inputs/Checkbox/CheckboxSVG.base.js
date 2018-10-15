import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Check from './Check.base'
import Rect from './Rect.base'

const CheckboxSVG = ({ className, checked, ...props }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 190 190'>
      <Rect {...props} checked={checked} />
      <Check {...props} checked={checked} />
    </svg>
  )
}

const StyledCheckboxSVG = styled(CheckboxSVG)`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: .9rem;
`

StyledCheckboxSVG.propTypes = {
  checked: PropTypes.bool
}

StyledCheckboxSVG.defaultProps = {
  checked: false
}

export default StyledCheckboxSVG
export { CheckboxSVG }
