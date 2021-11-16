import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import BaseLink, {BaseStyles} from './Link.base'

const BlueStyles = css`
  color:  ${props => props.theme.colors.rocketBlue};
  &:active, &:focus, &:hover {
    color: ${props => props.theme.colors.textPrimary};
    ${props => props.underline 
      ? `border-bottom-color: ${props.theme.colors.textPrimary};`
      : ''
    }
  }
`

const LinkStyles = css`
  ${BaseStyles}
  ${BlueStyles}
`

const Link = styled(BaseLink)`
  ${BlueStyles}
`

Link.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      textPrimary: PropTypes.string
    })
  }),
  uppercase: PropTypes.bool,
  underline: PropTypes.bool
}

Link.defaultProps = {
  underline: true
}
/** @component */
export { Link, LinkStyles }
