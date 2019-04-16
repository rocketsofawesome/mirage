import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'SRC'

const MobileLinkTertiary = styled(Link)`
  height: 3.6rem;
  display: inline-flex;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: ${props => props.background};
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

MobileLinkTertiary.propTypes = {
  background: PropTypes.string,
  className: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  uppercase: PropTypes.bool,
  underline: PropTypes.bool
}

MobileLinkTertiary.defaultProps = {
  background: 'transparent',
  fontSize: '1.6rem',
  fontStyle: 'italic',
  light: true,
  underline: false
}

/** @component */
export default MobileLinkTertiary
