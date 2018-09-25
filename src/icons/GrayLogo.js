import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLogo from './Logo.base'

const GrayLogo = styled(BaseLogo)`
  fill: ${props => props.theme.colors.gray[3]};
`

GrayLogo.propTypes = {
  width: PropTypes.string
}

/** @component */
export default GrayLogo

// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
