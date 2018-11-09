import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const baseLinkStyles = css`
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

const BaseLink = styled.a`
  ${props => baseLinkStyles}
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
export { baseLinkStyles }
