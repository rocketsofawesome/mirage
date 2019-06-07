import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from 'SRC/core/theme'
import { Link } from 'SRC'

const MobileLinkTop = styled(Link)`
  display: inline-flex;
  height: 4rem;
  align-items: center;
  background-color: ${props => props.background};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  letter-spacing: 0.04rem;
  margin-bottom: 2rem;
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

MobileLinkTop.propTypes = {
  background: PropTypes.string,
  className: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  uppercase: PropTypes.bool,
  underline: PropTypes.bool
}

MobileLinkTop.defaultProps = {
  background: 'transparent',
  fontSize: '2.6rem',
  fontFamily: theme.fonts.headerFont,
  uppercase: true,
  underline: false
}

/** @component */
export default MobileLinkTop
