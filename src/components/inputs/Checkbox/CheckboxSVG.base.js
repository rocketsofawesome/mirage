import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Check from './Check.base'
import Rect from './Rect.base'

class CheckboxSVG extends Component {
  state = {
    showAnimation: false
  }

  componentWillReceiveProps () {
    if (!this.state.showAnimation) {
      this.setState({showAnimation: true})
    }
  }

  render () {
    const { className, ...props } = this.props
    const  { showAnimation } = this.state
    return (
      <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 190 190'>
        <Rect {...props} showAnimation={showAnimation} />
        <Check {...props} showAnimation={showAnimation} />
      </svg>
    )
  }
}

const StyledCheckboxSVG = styled(CheckboxSVG)`
  width: ${props => props.width};
  margin-right: .9rem;
`

StyledCheckboxSVG.propTypes = {
  checked: PropTypes.bool
}

StyledCheckboxSVG.defaultProps = {
  checked: false,
  width: '2.5rem'
}

export default StyledCheckboxSVG
export { CheckboxSVG }
