import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { WhiteSpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'
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

const blockStyles = css`
  width: 100%;
  display: block;
`

const Button = styled(BaseButton)`
  color: ${props => props.theme.colors.white};
  border-color: transparent;

  ${props => backgroundColor}
  ${props => props.block && blockStyles}
`

Button.propTypes = {
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
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  }),
  block: PropTypes.bool
}

Button.defaultProps = {
  checkmark: WhiteCheckmark,
  spinner: WhiteSpinner,
  block: false
}


/** @component */
export default Button
