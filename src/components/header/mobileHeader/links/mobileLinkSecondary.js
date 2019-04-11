import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'SRC'

const MobileLinkSecondary = styled(Link)`
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

MobileLinkSecondary.propTypes = {

}

MobileLinkSecondary.defaultProps = {
  fontSize: '1.6rem',
  light: true,
  uppercase: true,
  underline: false
}

/** @component */
export default MobileLinkSecondary
