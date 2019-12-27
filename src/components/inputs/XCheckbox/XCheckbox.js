import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import XCheckboxSVG from './XCheckboxSVG.base'
import X from './X.base'
import Label from 'SRC/core/typography/Label'


class XCheckboxBase extends React.Component {
  onClick = () => {
    if (this.props.input && this.props.input.onClick) {
      const { input: { onClick } } = this.props
      onClick()
    }
  }

  render() {
    const { className, input, children, label, width, ...props } = this.props
    return (
      <Label {...props} lowercase className={className}>
        <input
          type='checkbox'
          onClick={this.onClick}
          {...input}
        />
        <XCheckboxSVG width={width} />
        { label ? label : children }
      </Label>
    )
  }
}

XCheckboxBase.propTypes = {
  className: PropTypes.string,
  input: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.bool.isRequired
    }),
    PropTypes.shape({
      checked: PropTypes.bool.isRequired
    })
  ]),
  label: PropTypes.string
}

const XCheckbox = styled(XCheckboxBase)`
  && {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: normal;

    input {
      width: 0;
      height: 0;
      margin-left: 0px;
      opacity: 0;
    }

    input:checked + ${XCheckboxSVG} ${X} {
      stroke: ${props => props.theme.colors.rocketBlue};
    }
  }
`

XCheckbox.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  })
}

/** @component */
export default XCheckbox
export { XCheckboxBase }
