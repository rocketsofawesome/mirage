import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseLink = styled.a`
  font-family: ${props => props.theme.fonts.primaryFont};
  text-decoration: none;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'initial'}
  &:hover {
    pointer: cursor;
    text-decoration: ${props => props.underline ? 'underline': 'none'};
  }
`

BaseLink.propTypes = {
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string.isRequired
    }).isRequired
  }),
  uppercase: PropTypes.bool.isRequired,
  underline: PropTypes.bool.isRequired
}

BaseLink.defaultProps = {
  uppercase: false,
  underline: true
}

/** @component */
export default BaseLink
