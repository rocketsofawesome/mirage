import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLogo from './Logo.base'

const Logo = styled(BaseLogo)`
  fill: ${props => props.theme.colors.rocketBlue};
`

Logo.propTypes = {
  theme: PropTypes.shape({
    color: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  }),
  width: PropTypes.string
}

/** @component */
export default Logo

// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
