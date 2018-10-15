import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import BaseButton from './Button.base'
import Checkmark from 'SRC/core/icons/Checkmark'
import Spinner from 'SRC/core/icons/Spinner'

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
  color: ${props => props.theme.colors.navy};
  border-color: ${props => props.theme.colors.navy};
`

export const colorButton = css`
  ${props => {
    if (props.selected) {
      return selected
    } else if (props.disabled || props.loading) {
      return disabledOrLoading
    }
    return defaultStyle
  }}
`

const BlueBorderButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0);
  ${colorButton}
  ${Spinner} rect {
    fill: ${props => props.theme.colors.loading};
  }

  ${Checkmark} > * {
    stroke: ${props => props.theme.colors.navy};
  }
`

BlueBorderButton.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default BlueBorderButton
