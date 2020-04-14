import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import XCheckboxSVG from './XCheckboxSVG.base'
import X from './X.base'
import { Label } from 'SRC'

const XCheckboxBase = ({ className, children, label, width, onChange, checked }) => (
  <Label lowercase className={className}>
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
    />
    <XCheckboxSVG width={width} />
    { label ? label : children }
  </Label>
)

XCheckboxBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
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
