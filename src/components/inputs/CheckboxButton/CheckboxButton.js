import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ErrorMessage from 'SRC/components/inputs/ErrorMessage'

const BaseCheckboxButton = ({ children, className, error, value, ...props }) => {
  return (
    <div className={className}>
      <input id={value} type='checkbox' value={value} {...props} />
      <label htmlFor={value}>
        {children}
      </label>
      {error &&
        <ErrorMessage>{error}</ErrorMessage>
      }
    </div>
  )
}

const squareStyle = css`
  height: 12rem;
  width: 12rem;
`

const rectangleStyle = css`
  height: 6.4rem;
  width: 100%;
`

const circleStyle = css`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`

const shapeVariants = {
  square: squareStyle,
  rectangle: rectangleStyle,
  circle: circleStyle
}

function handleShapeStyles(shape) {
  return shapeVariants[shape]
}

function borderColor (props) {
  if (props.error) {
    return props.theme.colors.flameOrange
  }
  return props.theme.colors.gray4
}

const checked = css`
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors.rocketBlue};
`

const CheckboxButton = styled(BaseCheckboxButton)`
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
  input {
    position: absolute;
    height: 0;
    width: 0;
    visibility: hidden;
  }
  > label {
    display: flex;
    height: 3.2rem;
    width: 6.4rem;
    justify-content: center;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    cursor: pointer;
    border: 1px solid ${borderColor};
    border-radius: 0.2rem;
    background-color: ${props => props.theme.colors.gray[0]};
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 1.6rem;
    font-weight: 100;
    color: ${props => props.theme.colors.navy};
    transition: color 0.25s, background-color 0.25s;
    ${props => handleShapeStyles(props.shape)}
  }

  > input:checked + label {
    ${props => checked}
  }
`

CheckboxButton.propTypes = {
  children: PropTypes.node,
  shape: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string.isRequired
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string.isRequired,
      rocketBlue: PropTypes.string.isRequired,
      white: PropTypes.string.isRequired,
      gray: PropTypes.array.isRequired
    })
  })
}

CheckboxButton.defaultProps = {
  error: null
}

/** @component */
export default CheckboxButton
