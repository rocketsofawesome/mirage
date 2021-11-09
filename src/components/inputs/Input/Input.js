import React from 'react'
import PropTypes from 'prop-types'
import InputElement from 'react-input-mask'
import styled, { css } from 'styled-components'

import ErrorMessage from 'SRC/components/inputs/ErrorMessage'

const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  error,
  ...fieldProps
}) => fieldProps

const Label = styled.label`
  position: absolute;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;

  display: block;
  font-size: 12px;
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props => props.theme.colors.textPrimary};
  letter-spacing: .5px;
  font-weight: 200;
  text-align: left;
`

const Span = styled.span`
  padding-left: 8px;
  text-transform: uppercase;
  color: rgba(0,0,0,.3);
`

const inputStyles = css`
  width: 100%;
  border: ${props => props.theme.styles.border};
  border-color: ${props => props.error ? props.theme.colors.textError : props.theme.colors.borderPrimary};
  color: ${props => props.theme.colors.textPrimary};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 6px;

  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 20px;

  &::placeholder {
    color: rgba(0,0,0,0.2);
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.rocketBlue};
    color: ${props => props.theme.colors.textSecondary};
  }
`

const StyledInput = styled.input`
  ${inputStyles}
`

const StyledInputElement = styled(InputElement)`
  ${inputStyles}
  height: 100%;
`

class BaseInput extends React.Component {
  _renderInput (props, error) {
    if (props.mask) {
      return <StyledInputElement error={error} {...domOnlyProps(props)} />
    }
    return <StyledInput error={error} {...domOnlyProps(props)} />
  }

  render () {
    const {
      label,
      sublabel,
      touched,
      active,
      error,
      className,
      ...rest
    } = this.props

    const showError = (touched && !active && error)
    return (
      <div className={className}>
        {label &&
          <Label>
            {label}
            {sublabel && <Span>{sublabel}</Span>}
          </Label>
        }

        {this._renderInput({ ...rest }, showError)}
        {showError &&
          <ErrorMessage>{error}</ErrorMessage>
        }
      </div>
    )
  }
}

BaseInput.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.string,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  sublabel: PropTypes.string,
  touched: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
}

BaseInput.defaultProps = {
  active: false,
  error: null,
  touched: false,
  type: 'text'
}

const Input = styled(BaseInput)`
  position: relative;
  label + input {
    padding-top: 30px;
  }
`

export default Input
