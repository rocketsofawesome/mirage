import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLink from './Link.base'

const WhiteLink = styled(BaseLink)`
  color:  ${props => props.theme.colors.white};
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.white};
    ${props => props.underline ?
      `border-bottom-color: ${props.theme.colors.white};` :
      ''
    }
  }
`

WhiteLink.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  }),
  underline: PropTypes.bool.isRequired
}

WhiteLink.defaultProps = {
  underline: true
}

/** @component */
export default WhiteLink
