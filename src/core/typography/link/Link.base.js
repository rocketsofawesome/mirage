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
  font-weight: ${props => props.light ? '400' : props.fontWeight};
  font-style: ${props => props.fontStyle};
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    text-decoration: none;
  }
`

const BaseLink = styled(({ renderLink, children, ...props }) => {
  delete props.light
  delete props.uppercase
  delete props.underline
  delete props.fontFamily
  delete props.fontSize
  delete props.fontWeight
  if (renderLink) {
    return renderLink({...props, children: children})
  } else {
    return (<a {...props}>{children}</a>)
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
