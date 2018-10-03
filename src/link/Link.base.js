import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseLink = styled.a`
  transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;

  text-decoration: none;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'initial'};

  border-bottom: 0.2rem solid;
  border-bottom-color: transparent;

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 1.4rem;
  font-weight: 500;
  &:hover {
    text-decoration: none;

    pointer: cursor;
  }
`

BaseLink.propTypes = {
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    })
  }),
  uppercase: PropTypes.bool.isRequired
}

BaseLink.defaultProps = {
  uppercase: false
}

/** @component */
export default BaseLink
