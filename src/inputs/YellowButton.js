import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseButton from './Button.base'

const YellowButton = styled(BaseButton)`
  color: ${props => props.theme.colors.navy};
  border-color: transparent;
  background-color: ${props => props.theme.colors.yellow};
  &:hover {
    background-color: ${props => props.theme.colors.yellowHover};
  }
`

YellowButton.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      navy: PropTypes.string,
      yellow: PropTypes.string
    })
  })
}

/** @component */
export default YellowButton
