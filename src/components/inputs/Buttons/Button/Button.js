import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { WhiteSpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'
import BaseButton from './Button.base'

export const disabledOrLoading = css`
  background-color: ${props => props.theme.colors.loading};
`
export const selected = css`
  background-color: ${props => props.theme.colors.navy}
`

const backgroundColor = css`
  ${props => (!props.selected && !props.disabled && !props.loading) && props.theme.colors.rocketBlue}
  ${props => props.selected && selected}
  ${props => (props.disabled || props.loading) && disabledOrLoading}
`

const regularStyles = css`
  background-color: ${backgroundColor};
  border-color: transparent;
  color: ${props => props.theme.colors.white};
  &:hover {
    background-color: ${props => props.theme.colors.rocketBlueHover};
  }
`

const miniStyles = css`
  border: 3px solid ${props => props.theme.colors.lightPink};
  background-color: white;
  color: ${props => props.theme.colors.rocketBlue};
`

const kindVariants = {
  regular: regularStyles,
  mini: miniStyles
}

const blockStyles = css`
  width: 100%;
  display: block;
`

const Button = styled(BaseButton)`
  ${props => kindVariants[props.kind]}
  ${props => props.selected && selected}
  ${props => (props.disabled || props.loading) && disabledOrLoading}
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
  block: PropTypes.bool,
  kind: PropTypes.string
}

Button.defaultProps = {
  checkmark: WhiteCheckmark,
  spinner: WhiteSpinner,
  block: false,
  kind: 'regular'
}

/** @component */
export default Button
