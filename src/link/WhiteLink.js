import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLink from './Link.base'

const WhiteLink = styled(BaseLink)`
  color:  ${props => props.theme.colors.white};
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.white};
  }
`

WhiteLink.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  }).isRequired
}

/** @component */
export default WhiteLink
