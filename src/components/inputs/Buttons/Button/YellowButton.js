import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseButton from './Button.base'
import { NavyCheckmark } from 'SRC/core/icons/Checkmark'
import { NavySpinner } from 'SRC/core/icons/Spinner'

const YellowButton = styled(BaseButton)`
  color: ${props => props.theme.colors.navy};
  border-color: transparent;
  background-color: ${props => props.theme.colors.yellow};
  &:hover {
    background-color: ${props => props.theme.colors.yellowHover};
  }
`

YellowButton.propTypes = {
  checkmark: PropTypes.object.isRequired,
  spinner: PropTypes.object.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      navy: PropTypes.string,
      yellow: PropTypes.string
    })
  })
}

YellowButton.defaultProps = {
  checkmark: NavyCheckmark,
  spinner: NavySpinner
}

/** @component */
export default YellowButton
