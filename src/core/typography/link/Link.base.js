import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme } from 'SRC/core/theme'

const baseLinkStyles = css`
transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;

text-decoration: none;
text-transform: ${props => props.uppercase ? 'uppercase' : 'initial'};

border-bottom: 0.2rem solid;
border-bottom-color: transparent;

font-family: ${props => props.fontFamily};
font-size: ${props => props.fontSize};
font-weight: ${props => (props.light) ? '400' : props.fontWeight};
font-style: ${props => props.fontStyle}
&:hover {
  text-decoration: none;

  pointer: cursor;
}
`

const BaseLink = styled(({ renderLink, ...props }) => {
  delete props.light
  delete props.uppercase
  delete props.underline
<<<<<<< HEAD
  delete props.fontFamily
  delete props.fontSize
  delete props.fontWeight
=======
>>>>>>> 03b2da4cb32b5a27a68b9befb3aa7a1a192ea806
  if (renderLink) {
    return renderLink(props)
  } else {
    return (<a {...props} />)
  }
})`
  ${baseLinkStyles}
`

BaseLink.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  light: PropTypes.bool,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    })
  }),
  uppercase: PropTypes.bool.isRequired,
  underline: PropTypes.bool
}

BaseLink.defaultProps = {
  fontFamily: theme.fonts.primaryFont,
  fontSize: '1.4rem',
  fontStyle: 'normal',
  fontWeight: 500,
  uppercase: false
}

/** @component */
export default BaseLink
export { baseLinkStyles }
