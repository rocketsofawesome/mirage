import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import BaseButton from './Button.base'
import { NavyCheckmark } from 'SRC/core/icons/Checkmark'
import { GraySpinner } from 'SRC/core/icons/Spinner'

export const defaultStyle = css`
  color: ${props => props.theme.colors.rocketBlue};
  border-color: ${props => props.theme.colors.rocketBlue};
  &:hover {
    color: ${props => props.theme.colors.rocketBlueHover};
    border-color: ${props => props.theme.colors.rocketBlueHover};
  }
`
export const disabledOrLoading = css`
  color: ${props => props.theme.colors.loading};
  border-color: ${props => props.theme.colors.loading};
`
export const selected = css`
  color: ${props => props.theme.colors.textPrimary};
  border-color: ${props => props.theme.colors.navy};
`

const colorButton = css`
  ${props => (!props.selected && !props.disabled && !props.loading) && defaultStyle}
  ${props => props.selected && selected}
  ${props => props.disabled && disabledOrLoading}
  ${props => props.loading && disabledOrLoading}
`

const BlueBorderButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0);
  ${props => colorButton}
`

BlueBorderButton.propTypes = {
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
      white: PropTypes.string
    })
  })
}

BlueBorderButton.defaultProps = {
  checkmark: NavyCheckmark,
  spinner: GraySpinner
}

/** @component */
export default BlueBorderButton
