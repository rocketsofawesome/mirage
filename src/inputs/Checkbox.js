import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

import Label from '../typography/Label'

const dash = keyframes`
  from {
    stroke-dashoffset: 200;
  }
  to {
    stroke-dashoffset: 0;
  }
`

const fillIn = keyframes`
  from {
    fill: rgba(255, 255, 255, 0);
  }
  to {
    fill: rgba(0,115,209, 1.0);
  }
`

const fillOut = keyframes`
  from {
    fill: rgba(0,115,209, 1.0);
  }
  to {
    fill: rgba(255, 255, 255, 0);
  }
`

const checked = css`
  .box {
    animation: ${fillIn} 0.25s linear forwards;

    fill: stroke: ${props => props.theme.colors.rocketBlue};
  }
  .check {
    animation: ${dash} 0.25s linear forwards;

    stroke: ${props => props.theme.colors.white};
    stroke-dasharray: 200;
    stroke-dashoffset: 0;
  }
`

const unchecked = css`
  animation: ${fillOut} 0.25s linear forwards;

  stroke: transparent;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dashoffset: 200;
  fill: none;
`

const CheckboxBase = (props) => {
  const { className, input, label } = props
  return (
    <Label lowercase className={className}>
      <input
        type='checkbox'
        {...input}
      />
      <svg className='checkbox' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 190 190'>
        <rect className='box' x='2.5' y='2.5' width='185' height='185' rx='10' ry='10' />
        <polyline className='check' points='38.75 98.75 77.75 134.75 151.25 55.25' />
      </svg>
      {label}
    </Label>
  )
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
    value: false
  }
}

const Checkbox = styled(CheckboxBase)`
  display: flex;
  align-items: center;

  input {
    width: 0;
    height: 0;

    opacity: 0;
  }

input:checked + .checkbox {
  ${checked}
}

.checkbox {
  width: 2.4rem;
  height: 2.4rem;
  margin-right: .9rem;
}
.box {
  ${unchecked}

  stroke: ${props => props.theme.colors.rocketBlue};
  stroke-width: 20;
  stroke-linecap: round;
}

.check {
  fill: none;
  stroke-width: 20;
  stroke-linecap: round;
  stroke: ${props => props.theme.colors.white};
}


.focused .checkbox .box {
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
