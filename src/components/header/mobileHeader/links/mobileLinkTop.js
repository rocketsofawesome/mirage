import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from 'SRC/core/theme'
import { Link } from 'SRC'

const MobileLinkTop = styled(Link)`
  display: inline-flex;
  height: 4rem;
  align-items: center;
  background-color: ${props => props.background};
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

MobileLinkTop.propTypes = {
  background: 'transparent'
}

MobileLinkTop.defaultProps = {
  fontSize: '2.6rem',
  fontFamily: theme.fonts.headerFont,
  uppercase: true,
  underline: false
}

/** @component */
export default MobileLinkTop
