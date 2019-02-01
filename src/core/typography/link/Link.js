import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import BaseLink, {BaseStyles} from './Link.base'

const blueStyles = css`
  color:  ${props => props.theme.colors.rocketBlue};
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.navy};
    ${props => props.underline ?
      `border-bottom-color: ${props.theme.colors.navy};` :
      ''
    }
  }
`

const aStyle = css`
  ${BaseStyles}
  ${blueStyles}
`

const Link = styled(BaseLink)`
  ${blueStyles}
`

Link.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  }),
  underline: PropTypes.bool.isRequired
}

Link.defaultProps = {
  underline: true
}
/** @component */
export default Link
export {aStyle}
