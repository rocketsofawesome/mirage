import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLogo from './Logo.base'

const GrayLogo = styled(BaseLogo)`
  fill: ${props => props.theme.colors.gray[4]};
`

GrayLogo.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      gray: PropTypes.array
    })
  }),
  width: PropTypes.string
}

/** @component */
export default GrayLogo

// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
