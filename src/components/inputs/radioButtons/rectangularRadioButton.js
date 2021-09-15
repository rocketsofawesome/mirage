import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ErrorMessage from 'SRC/components/inputs/ErrorMessage'

const BaseRectangularRadioButton = (props) => {
  const {
    children,
    className,
    value,
    error,
    kind,
    ...rest
  } = props

  return (
    <div className={className}>
      <input id={value} type='radio' value={value} {...rest} />
      <label htmlFor={value}>
        {children}
      </label>
      {error &&
        <ErrorMessage>{error}</ErrorMessage>
      }
    </div>
  )
}

function borderColor(props) {
  if (props.error) {
    return props.theme.colors.flameOrange
  }
  return props.theme.colors.gray4
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

const regularStyles = css`
  color: ${props => props.theme.colors.navy};
  border: 1px solid ${borderColor};
  background-color: ${props => props.theme.colors.gray[0]};
`

const regularStylesChecked = css`
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors.rocketBlue};
`

const miniStyles = css`
  border: 3px solid ${props => props.theme.colors.lightPink};
  background-color: white;
  color: ${props => props.theme.colors.rocketBlue};
`

const miniStylesChecked = css`
  background-color: ${props => props.theme.colors.lightPink};
`

const kindVariants = {
  regular: regularStyles,
  mini: miniStyles
}

const kindVariantsChecked = {
  regular: regularStylesChecked,
  mini: miniStylesChecked
}

const RectangularRadioButton = styled(BaseRectangularRadioButton)`
  position: relative;
  > input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  > label {
    display: flex;
    height: 10vw;
    width: 10vw;
    justify-content: center;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition-timing-function: ease-in-out;
    transition-duration: 0.25s;
    transition-property: background-color, border-color, color;
    text-align: center;
    letter-spacing: normal;
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 1.6rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;

    ${props => handleShapeStyles(props.shape)}
    ${props => kindVariants[props.kind]}
  }

  > input:checked + label {
    ${props => kindVariantsChecked[props.kind]}
  }
`

RectangularRadioButton.propTypes = {
  children: PropTypes.node,
  shape: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
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

RectangularRadioButton.defaultProps = {
  error: null,
  shape: 'rectangle',
  kind: 'regular'
}

/** @component */
export default RectangularRadioButton
