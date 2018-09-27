import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLink from './Link.base'

const Link = styled(BaseLink)`
  color:  ${props => props.theme.colors.rocketBlue};
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.navy};
    ${props => props.underline ?
      `border-bottom-color: ${props.theme.colors.navy};` :
      ''
    }
  }
`

Link.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  }).isRequired,
  underline: PropTypes.bool.isRequired
}

Link.defaultProps = {
  underline: true
}
/** @component */
export default Link
