import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLink from './Link.base'

const NavyLink = styled(BaseLink)`
  color:  ${props => props.theme.colors.navy};
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.navy};
    ${props => props.underline ?
      `border-bottom-color: ${props.theme.colors.navy};` :
      ''
    }
  }
`

NavyLink.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  }),
  underline: PropTypes.bool.isRequired
}

NavyLink.defaultProps = {
  underline: true
}

/** @component */
export default NavyLink
