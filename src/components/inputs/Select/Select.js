import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ErrorMessage from 'SRC/components/inputs/ErrorMessage'

function borderColor(props) {
  if (props.active) {
    return props.theme.colors.rocketBlue;
  } else if (props.error) {
    return props.theme.colors.flameOrange;
  }
  return props.theme.colors.gray4;
}

function labelColor(props) {
  if (props.error) {
    return props.theme.colors.flameOrange;
  }
  return props.theme.colors.navy;
}

const Container = styled.div`
  background-color: white;
  border: 1px solid ${borderColor};
  padding: 10px 16px 0px;
  color: ${props => props.theme.colors.gray4};
`

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 12px;
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${labelColor};
  letter-spacing: .5px;
  font-weight: 200;
  padding-bottom: 5px;
`

const SelectInput = styled.select`
  border: 0;
  display: block;
  width: 100%;
  font-size: 20px;
  font-family: ${props => props.theme.fonts.secondaryFont};
  outline: none;
  background-color: transparent;
`

const Select = (props) => {
  const {
    active,
    className,
    error,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    options,
    touched,
    value
  } = props

  const showError = (touched && !active && error)
  return (
    <div className={className}>
      <Container active={active} error={showError}>
        {label &&
          <Label error={showError}>{label}</Label>
        }
        <SelectInput
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          name={name}
          value={value}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </SelectInput>
      </Container>
      {showError &&
        <ErrorMessage>{error}</ErrorMessage>
      }
    </div>
  )
}

Select.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  options: PropTypes.array.isRequired,
  touched: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ])
}

Select.defaultProps = {
  active: false,
  className: null,
  error: null,
  label: null,
  name: null,
  touched: false
}

export default Select
