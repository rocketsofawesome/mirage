import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLogo from './Logo.base'

const NavyLogo = styled(BaseLogo)`
  fill: ${props => props.theme.colors.navy};
`

NavyLogo.propTypes = {
  width: PropTypes.string
}

/** @component */
export default NavyLogo

// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
