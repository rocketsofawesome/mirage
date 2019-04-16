import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLogo from './Logo.base'

const WhiteLogo = styled(BaseLogo)`
  fill: ${props => props.theme.colors.white};
`

WhiteLogo.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  }),
  maxWidth: PropTypes.string
}

/** @component */
export default WhiteLogo

// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
