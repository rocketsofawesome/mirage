import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSizeRadio = styled.div`
position: relative;
> input {
  position: absolute;

  width: 0;
  height: 0;

  opacity: 0;
}
> label {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  cursor: pointer;
  transition-timing-function: ease-in-out;
  transition-duration: 0.25s;
  transition-property: background-color, border-color, color;
  text-align: center;
  letter-spacing: normal;

  color: ${props => props.theme.colors.navy};
  border: 1px solid ${props => props.theme.colors.gray[4]};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.gray[0]};

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
}

> input:checked + label {
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors.rocketBlue};
}
`

const SizeRadio = ({children, input, ...props}) => {
  return (
    <StyledSizeRadio>
      <input id={input.value} type='radio' {...input} />
      <label htmlFor={input.value}>
        {children}
      </label>
    </StyledSizeRadio>
  )
}

SizeRadio.propTypes = {
  children: PropTypes.string,
  input: PropTypes.object,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string.isRequired
    }).isRequired,
    colors: PropTypes.shape({
      navy: PropTypes.string.isRequired,
      rocketBlue: PropTypes.string.isRequired,
      white: PropTypes.string.isRequired,
      gray: PropTypes.array.isRequired
    }).isRequired
  })
}

/** @component */
export default SizeRadio
