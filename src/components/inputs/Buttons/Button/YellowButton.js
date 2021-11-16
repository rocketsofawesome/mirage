import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseButton from './Button.base'
import { NavyCheckmark } from 'SRC/core/icons/Checkmark'
import { NavySpinner } from 'SRC/core/icons/Spinner'

const YellowButton = styled(BaseButton)`
  color: ${props => props.theme.colors.textPrimary};
  border-color: transparent;
  background-color: ${props => props.theme.colors.yellow};
  &:hover {
    background-color: ${props => props.theme.colors.yellowHover};
  }
`

YellowButton.propTypes = {
  checkmark: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
  spinner: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      textPrimary: PropTypes.string,
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
