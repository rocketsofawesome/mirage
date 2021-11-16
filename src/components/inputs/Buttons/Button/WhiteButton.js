import styled from 'styled-components'

import BaseButton from './Button.base'
import { NavyCheckmark } from 'SRC/core/icons/Checkmark'
import { NavySpinner } from 'SRC/core/icons/Spinner'

const WhiteButton = styled(BaseButton)`
  color: ${props => props.theme.colors.textPrimary};
  background-color: ${props => props.theme.colors.white};
  border-color: transparent;

  &:hover {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

WhiteButton.defaultProps = {
  checkmark: NavyCheckmark,
  spinner: NavySpinner
}

/** @component */
export default WhiteButton
