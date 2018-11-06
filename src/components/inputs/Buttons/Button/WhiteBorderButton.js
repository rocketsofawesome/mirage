import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import BaseButton from './Button.base'
import { NavyCheckmark } from 'SRC/core/icons/Checkmark'
import { GraySpinner } from 'SRC/core/icons/Spinner'

const colorButton = (props) => {
  const defaultStyle = css`
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.white};
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `
  const disabledOrLoading = css`
  color: ${props => props.theme.colors.loading};
    border-color: ${props => props.theme.colors.loading};
  `
  const selected = css`
  color: ${props => props.theme.colors.navy};
  border-color: ${props => props.theme.colors.navy};
  `
  if (props.selected) {
    return selected
  } else if (props.disabled || props.loading) {
    return disabledOrLoading
  }
  return defaultStyle
}

const WhiteBorderButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0);
  ${props => colorButton(props)}
`

WhiteBorderButton.propTypes = {
  spinner: PropTypes.function,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

WhiteBorderButton.defaultProps = {
  checkmark: NavyCheckmark,
  spinner: GraySpinner
}

/** @component */
export default WhiteBorderButton
