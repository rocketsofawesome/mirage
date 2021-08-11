import React from 'react'
import PropTypes from 'prop-types'
import InputElement from 'react-input-mask'
import styled from 'styled-components'

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
  ...fieldProps }) => fieldProps

const Label = styled.label`
  position: absolute;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;

  display: block;
  font-size: 12px;
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props => props.theme.colors.navy};
  letter-spacing: .5px;
  font-weight: 200;
  text-align: left;
`

const Span = styled.span`
  padding-left: 8px;

  text-transform: uppercase;

  color: rgba(0,0,0,.3);
`

const StyledInput = styled.input`
  border: 1px solid ${props => props.error ? props.theme.colors.flameOrange : props.theme.colors.gray4};
  width: 100%;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 6px;

  color: ${props => props.error ? props.theme.colors.flameOrange : props.theme.colors.navy};
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 20px;

  &::placeholder {
    color: rgba(0,0,0,0.2);
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.rocketBlue};
    color: ${props => props.theme.colors.rocketBlue};
  }
`

const StyledInputElement = styled(InputElement)`
  height: 100%;
  width: 100%;
  border: 1px solid ${props => props.error ? props.theme.colors.flameOrange : props.theme.colors.gray4}!important;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 6px;

  color: ${props => props.error ? props.theme.colors.flameOrange : props.theme.colors.navy}!important;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 20px;

  &::placeholder {
    color: rgba(0,0,0,0.2);
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.rocketBlue};
    color: ${props => props.theme.colors.rocketBlue};
  }
`

class BaseInput extends React.Component {
  _renderInput (props, error) {
    if (props.mask) {
      return <StyledInputElement error={error} {...domOnlyProps(props)} />
    }
    return <StyledInput error={error} {...domOnlyProps(props)} />
  }

  render () {
    const { label, sublabel, formError, errorMessage, className, ...inputProps } = this.props

    return (
      <div className={className}>
        {label &&
          <Label>
            {label}
            {sublabel && <Span>{sublabel}</Span>}
          </Label>
        }

        {this._renderInput(inputProps, !!formError)}
        {errorMessage &&
          <ErrorMessage>{errorMessage}</ErrorMessage>
        }
      </div>
    )
  }
}

BaseInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  formError: PropTypes.bool,
  errorMessage: PropTypes.string,
  mask: PropTypes.string,
  maxLength: PropTypes.string,
  className: PropTypes.string
}

BaseInput.defaultProps = {
  type: 'text'
}

const Input = styled(BaseInput)`
  position: relative;
  label + input {
    padding-top: 30px;
  }
`

export default Input
