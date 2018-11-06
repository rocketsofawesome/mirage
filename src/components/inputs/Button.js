import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Spinner from 'SRC/core/icons/Spinner'
import Checkmark from 'SRC/core/icons/Checkmark'
import BaseButton from './Button.base'

export const defaultStyle = css`
  background-color: ${props => props.theme.colors.rocketBlue};
  &:hover {
    background-color: ${props => props.theme.colors.rocketBlueHover};
  }
`
export const disabledOrLoading = css`
  background-color: ${props => props.theme.colors.loading};
`
export const selected = css`
  background-color: ${props => props.theme.colors.navy}
`

const backgroundColor = css`
  ${props => (!props.selected && !props.disabled && !props.loading) && defaultStyle}
  ${props => props.selected && selected}
  ${props => props.disabled && disabledOrLoading}
  ${props => props.loading && disabledOrLoading}
`

const Button = styled(BaseButton)`
  color: ${props => props.theme.colors.white};
  border-color: transparent;

  ${Spinner} rect {
    fill: ${props => props.theme.colors.white};
  }

  ${Checkmark} > * {
    stroke: ${props => props.theme.colors.white};
  }
  ${props => backgroundColor}
`

Button.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  })
}


/** @component */
export default Button
