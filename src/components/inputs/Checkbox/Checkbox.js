import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CheckboxSVG from './CheckboxSVG.base'
import Rect from './Rect.base'
import Check from './Check.base'
import Label from 'SRC/core/typography/Label'

class CheckboxBase extends React.Component {
  onClick = () => {
    if (this.props.input && this.props.input.onClick) {
      const { input: { onClick } } = this.props
      onClick()
    }
  }

  render() {
    const { className, input, children, label, labelColor, width, ...props } = this.props

    return (
      <Label {...props} color={labelColor} lowercase className={className}>
        <input
          type='checkbox'
          onClick={this.onClick}
          {...input}
        />
        <CheckboxSVG width={width} />
        <span>
          { label ? label : children }
        </span>
      </Label>
    )
  }
}

CheckboxBase.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string
}

const Checkbox = styled(CheckboxBase)`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;

  ${CheckboxSVG} {
    flex-shrink: 0;
  }

  ${CheckboxSVG} ${Check} {
    display: none; 
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  input:checked + ${CheckboxSVG} ${Rect} {
    fill: ${props => props.theme.colors.rocketBlue};
  }

  input:checked + ${CheckboxSVG} ${Check} {
    display: block;
    stroke: ${props => props.theme.colors.white};
    stroke-dasharray: 200;
    stroke-dashoffset: 0;
  }
`

Checkbox.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  })
}

Checkbox.defaultProps = {
  labelColor: 'navy'
}

/** @component */
export default Checkbox
export { CheckboxBase }
