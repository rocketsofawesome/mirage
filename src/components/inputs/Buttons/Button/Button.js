import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { WhiteSpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'
import BaseButton from './Button.base'

const disabledOrLoading = css`
  background-color: ${props => props.theme.colors.loading};
  border: none;
`

const blockStyles = css`
  width: 100%;
  display: block;
`

const Button = styled(BaseButton)`
  background-color: ${props => props.selected ? props.theme.colors.buttonSelected : props.theme.colors.buttonPrimary};
  &:hover {
    background-color: ${props => !(props.disabled || props.loading || props.selected) && props.theme.colors.buttonPrimaryHover};
  }
  border: ${props => props.theme.styles.border};
  border-color: ${props => props.theme.colors.borderPrimary};
  color: ${props => props.theme.colors.buttonTextPrimary};
  ${props => props.block && blockStyles}
  ${props => (props.disabled || props.loading) && disabledOrLoading}
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
