import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLink from './Link.base'

const Link = styled(BaseLink)`
  color:  ${props => props.theme.colors.rocketBlue};
  transition: color 0.25s ease-in-out, border-bottom-color 0.25s ease-in-out;
  border-bottom: 0.125em solid;
  border-bottom-color: rgba(0, 0, 0, 0);
  &:active, &:focus, &:hover, &:visited {
    color: ${props => props.theme.colors.navy};
    text-decoration: none;
    border-bottom-color: ${props => props.theme.colors.navy};
  }
`

Link.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  }).isRequired
}

/** @component */
export default Link
