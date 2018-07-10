import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const styleButton = (type) => {
  switch (type) {
    default:
      return css`
        color: ${props => props.theme.colors.white};
        border-color: transparent;
        background-color: ${props => props.theme.colors.rocketBlue};
      `
    case 'yellow':
      return css`
        color: ${props => props.theme.colors.navy};
        border-color: transparent;
        background-color: ${props => props.theme.colors.yellow};
      `
    case 'secondaryBlue':
      return css`
        color: ${props => props.theme.colors.rocketBlue};
        border-color: ${props => props.theme.colors.rocketBlue};
        background-color: ${props => props.theme.colors.white};
      `
    case 'secondaryWhite':
      return css`
        color: ${props => props.theme.colors.white};
        border-color: ${props => props.theme.colors.white};
        background-color: transparent;
      `
  }
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  height: 50px;
  ${props => props.width ? `width: ${props.width};` : ''}

  text-align: center;
  letter-spacing: 1px;

  ${props => styleButton(props.type)}
  border-radius: 2px;

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 14px;
  font-weight: 500;
  ${props => props.sentanceCase
    ? 'text-transform: inherit;'
    : 'text-transform: uppercase;'
  }
`

Button.propTypes = {
  type: PropTypes.string.isRequired,
  sentanceCase: PropTypes.bool,
  width: PropTypes.string
}

Button.defaultProps = {
  type: 'primary'
}

/** @component */
export default Button
