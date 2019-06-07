import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'SRC'

const MobileLinkSecondary = styled(Link)`
  height: 4rem;
  display: inline-flex;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: ${props => props.background};
  letter-spacing: 0.1rem;
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

MobileLinkSecondary.propTypes = {
  background: PropTypes.string,
  className: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool,
  underline: PropTypes.bool
}

MobileLinkSecondary.defaultProps = {
  background: 'transparent',
  fontSize: '1.6rem',
  light: true,
  uppercase: true,
  underline: false
}

/** @component */
export default MobileLinkSecondary
