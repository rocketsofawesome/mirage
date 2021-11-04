import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import ErrorMessage from 'SRC/components/inputs/ErrorMessage'

function pickColor(props, color) {
  if (props.active) {
    return props.theme.colors.rocketBlue;
  } else if (props.error) {
    return props.theme.colors.flameOrange;
  }
  return props.theme.colors[color];
}

function labelColor(props) {
  if (props.error) {
    return props.theme.colors.flameOrange;
  } else if (props.kind === 'mini') {
    return props.theme.colors.rocketBlue
  }
  return props.theme.colors.navy;
}

const regularContainerStyles = css`
  border: 1px solid ${props => pickColor(props, 'gray4')}
`

const miniContainerStyles = css`
  border: 3px solid ${props => pickColor(props, 'lightPink')}
`

const containerVariants = {
  regular: regularContainerStyles,
  mini: miniContainerStyles
}

const regularSelectStyles = css`
  color: ${props => props.theme.colors.navy};

  &:focus {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

const miniSelectStyles = css`
  color: ${props => props.theme.colors.rocketBlue};
`

const selectVariants = {
  regular: regularSelectStyles,
  mini: miniSelectStyles
}

const Container = styled.div`
  background-color: white;
  padding: 10px 16px 0px;
  ${props => containerVariants[props.kind]};
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
  ${props => selectVariants[props.kind]}
`

const Select = (props) => {
  const {
    active,
    className,
    error,
    kind,
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
      <Container active={active} error={showError} kind={kind}>
        {label &&
          <Label error={showError} kind={kind}>{label}</Label>
        }
        <SelectInput
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          kind={kind}
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
  kind: PropTypes.string,
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
  kind: 'regular',
  label: null,
  name: null,
  touched: false
}

export default Select
