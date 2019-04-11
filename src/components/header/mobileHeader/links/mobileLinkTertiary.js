import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'SRC'

const MobileLinkTertiary = styled(Link)`
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

MobileLinkTertiary.propTypes = {

}

MobileLinkTertiary.defaultProps = {
  fontSize: '1.6rem',
  fontStyle: 'italic',
  light: true,
  underline: false
}

/** @component */
export default MobileLinkTertiary
