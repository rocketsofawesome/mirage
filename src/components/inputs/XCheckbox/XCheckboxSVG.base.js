import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import X from './X.base'
import Rect from '../Checkbox/Rect.base'

class XCheckboxSVG extends Component {
  render () {
    const { className, ...props } = this.props
    return (
      <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 190 190'>
        <Rect {...props} />
        <X {...props} />
      </svg>
    )
  }
}

const StyledXCheckboxSVG = styled(XCheckboxSVG)`
  width: ${props => props.width};
  margin-right: .9rem;
`

StyledXCheckboxSVG.propTypes = {
  checked: PropTypes.bool
}

StyledXCheckboxSVG.defaultProps = {
  checked: false,
  width: '2.5rem'
}

export default StyledXCheckboxSVG
export { XCheckboxSVG }
