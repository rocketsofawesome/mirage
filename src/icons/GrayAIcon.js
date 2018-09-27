import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseAIcon from './AIcon.base'

const GrayAIcon = styled(BaseAIcon)`
  fill: ${props => props.theme.colors.gray[2]};
`

GrayAIcon.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      gray: PropTypes.array
    })
  })
}

/** @component */
export default GrayAIcon

// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
