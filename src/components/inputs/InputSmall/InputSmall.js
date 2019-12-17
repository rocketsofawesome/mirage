import React from 'react'
import PropTypes from 'prop-types'
import InputElement from 'react-input-mask'
import styled from 'styled-components'

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

const ErrorMessage = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.flameOrange};
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 2px;
  min-height: 18px;
  line-height: 18px;
`

const StyledInputSmall = styled.input`
  border: 1px solid ${props => props.error ? props.theme.colors.flameOrange : props.theme.colors.gray4}!important;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  padding-left: 14px;
  padding-right: 14px;
  padding-top: 12.5px;
  padding-bottom: 8.5px;

  color: ${props => props.error ? props.theme.colors.flameOrange : props.theme.colors.rocketBlue}!important;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 16px;

  &::placeholder {
    color: ${props => props.theme.colors.navy};
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.36px;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.rocketBlue};
    color: ${props => props.theme.colors.rocketBlue};
  }
`

const StyledInputSmallElement = styled(InputElement)`
  height: 100%;
  width: 100%;
  border: 1px solid ${props => props.error ? props.theme.colors.flameOrange : props.theme.colors.gray4}!important;
  box-sizing: border-box;

  padding-left: 14px;
  padding-right: 14px;
  padding-top: 12.5px;
  padding-bottom: 8.5px;

  color: ${props => props.error ? props.theme.colors.flameOrange : props.theme.colors.rocketBlue}!important;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 16px;

  &::placeholder {
    color: ${props => props.theme.colors.navy};
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.36px;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.rocketBlue};
    color: ${props => props.theme.colors.rocketBlue};
  }
`

class BaseInputSmall extends React.Component {
  _renderInputSmall (props, error) {
    if (props.mask) {
      return <StyledInputSmallElement error={error} {...domOnlyProps(props)} />
    }
    return <StyledInputSmall error={error} {...domOnlyProps(props)} />
  }

  render () {
    const { label, sublabel, errorMessage, className, ...inputProps } = this.props
    const formError = errorMessage !== ''

    return (
      <div className={className}>
        {label &&
          <Label>
            {label}
            {sublabel && <Span>{sublabel}</Span>}
          </Label>
        }

        {this._renderInputSmall(inputProps, !!formError)}
        {errorMessage &&
          <ErrorMessage>{errorMessage}</ErrorMessage>
        }
      </div>
    )
  }
}

BaseInputSmall.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  errorMessage: PropTypes.string,
  mask: PropTypes.string,
  maxLength: PropTypes.string,
  className: PropTypes.string
}

BaseInputSmall.defaultProps = {
  type: 'text'
}

const InputSmall = styled(BaseInputSmall)`
  position: relative;
`

export default InputSmall
