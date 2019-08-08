import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

import CheckboxSVG from './CheckboxSVG.base'
import Rect from './Rect.base'
import Check from './Check.base'
import Label from 'SRC/core/typography/Label'

const rectFillOut = keyframes`
  from {
    fill: rgba(0,115,209, 1.0);
  }
  to {
    fill: rgba(255, 255, 255, 0);
  }
`

const rectFillIn = keyframes`
  from {
    fill: rgba(255, 255, 255, 0);
  }
  to {
    fill: rgba(0,115,209, 1.0);
  }
`

const rectChecked = css`
  animation: ${rectFillIn} 0.25s linear forwards;

  fill: ${props => props.theme.colors.rocketBlue};
`

const rectUnchecked = css`
  animation: ${rectFillOut} 0.25s linear forwards;

  stroke-linecap: round;
  stroke-dashoffset: 200;
  fill: none;
`

const checkDash = keyframes`
  from {
    stroke-dashoffset: 200;
  }
  to {
    stroke-dashoffset: 0;
  }
`

const checkAnimation = css`
  animation: ${checkDash} 0.25s linear forwards;

  stroke: ${props => props.theme.colors.white};
  stroke-dasharray: 200;
  stroke-dashoffset: 0;
`

class CheckboxBase extends React.Component {
  state = {
    showAnimation: false
  }

  onClick = () => {
    if (this.props.input && this.props.input.onClick) {
      const { input: { onClick } } = this.props
      onClick()
    }
  }

  render() {
    const { className, input, children, width, ...props } = this.props
    const showAnimation = this.state.showAnimation ? 'showAnimation' : ''
    return (
      <Label {...props} lowercase className={className}>
        <input
          className={showAnimation}
          type='checkbox'
          onClick={this.onClick}
          {...input}
        />
        <CheckboxSVG width={width} />
        {children}
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

const Checkbox = styled(CheckboxBase)`
  && {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 400;

    input {
      width: 0;
      height: 0;

      opacity: 0;
    }

    input:checked + ${CheckboxSVG} ${Rect} {
      fill: ${props => props.theme.colors.rocketBlue};
    }

    input:checked + ${CheckboxSVG} ${Check} {
      stroke: ${props => props.theme.colors.white};
      stroke-dasharray: 200;
      stroke-dashoffset: 0;
    }

    .showAnimation:focused + ${CheckboxSVG} ${Rect} {
      stroke-width: 40;
    }

    .showAnimation:checked + ${CheckboxSVG} ${Rect} {
      ${rectChecked}
    }

    .showAnimation:checked + ${CheckboxSVG} ${Check} {
      ${checkAnimation}
    }
    .showAnimation:not(:checked) + ${CheckboxSVG} ${Rect} {
      ${rectUnchecked}
    }
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
