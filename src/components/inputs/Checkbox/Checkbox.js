import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CheckboxSVG from './CheckboxSVG.base'
import Rect from './Rect.base'
import Label from 'SRC/core/typography/Label'

class CheckboxBase extends React.Component {
  render() {
    const { className, input, label, ...props } = this.props
    const checked = input.value
    return (
      <Label {...props} lowercase className={className}>
        <input
          type='checkbox'
          {...input}
          checked={checked}
        />
        <CheckboxSVG {...props} checked={checked} />
        {label}
      </Label>
    )
  }
}

CheckboxBase.propTypes = {
  className: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.bool
  }).isRequired,
  label: PropTypes.string
}

CheckboxBase.defaultProps = {
  input: {
    value: false,
    onChange: () => {}
  }
}

const Checkbox = styled(CheckboxBase)`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;

  input {
    width: 0;
    height: 0;

    opacity: 0;
  }

  input:focused + ${Rect} {
    stroke-width: 40;
  }
`

Checkbox.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  })
}

/** @component */
export default Checkbox
export { CheckboxBase }
