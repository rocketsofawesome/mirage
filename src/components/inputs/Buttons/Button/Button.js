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

const regularStyles = css`
  background-color: ${props => props.theme.colors.rocketBlue};
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

function getBaseStyle (props) {
  if (!props.selected && !props.disabled && !props.loading && !props.kind === 'mini') {
    return regularStyles
  } else if (props.kind === 'mini') {
    return miniStyles
  }
}

const backgroundColor = css`
  ${props => getBaseStyle(props)}
  ${props => props.selected && selected}
  ${props => (props.disabled || props.loading) && disabledOrLoading}
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
  ${props => kindVariants[props.kind]}
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
