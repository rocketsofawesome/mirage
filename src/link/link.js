import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const colors = {
  blue: css`
    color:  ${props => props.theme.colors.rocketBlue};
    &:active, &:focus, &:hover, &:visited {
      color: ${props => props.theme.colors.rocketBlue};
    }
  `,
  navy: css`
    color:  ${props => props.theme.colors.navy};
    &:active, &:focus, &:hover, &:visited {
      color: ${props => props.theme.colors.navy};
    }
  `,
  white: css`
    color:  ${props => props.theme.colors.white};
    &:active, &:focus, &:hover, &:visited {
      color: ${props => props.theme.colors.white};
    }
  `,
}

const Link = styled.a`
  font-family: ${props => props.theme.fonts.primaryFont};
  text-decoration: none;
  text-transform: ${props => props.upperCase ? 'uppercase' : 'initial'}
  &:hover {
    text-decoration: ${props => props.underline ? 'underline': 'none'};
  }
  ${props => props.color ? colors[props.color] : colors.blue}
`

Link.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string.isRequired
    }).isRequired,
    colors: PropTypes.shape({
      navy: PropTypes.string.isRequired
    }).isRequired
  })
}

Link.defaultProps = {
  color: 'blue',
  underline: true,
  upperCase: false
}

/** @component */
export default Link
