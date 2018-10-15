import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseAIcon from './AIcon.base'

const WhiteAIcon = styled(BaseAIcon)`
  fill: ${props => props.theme.colors.white};
`

WhiteAIcon.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default WhiteAIcon

// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
