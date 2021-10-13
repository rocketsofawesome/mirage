import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { WhiteSpinner } from 'SRC/core/icons/Spinner'
import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'
import BaseButton from './Button.base'

const regularStyles = css`
  background-color: ${props => props.theme.colors.rocketBlue};
  &:hover {
    background-color: ${props => !(props.disabled || props.loading || props.selected) && props.theme.colors.rocketBlueHover};
  }
  border-color: transparent;
  color: ${props => props.theme.colors.white};
`

const miniStyles = css`
  border: 3px solid ${props => props.theme.colors.lightPink};
  background-color: white;
  color: ${props => props.theme.colors.rocketBlue};
`

const disabledOrLoading = css`
  background-color: ${props => props.theme.colors.loading};
`
const regularStylesSelected = css`
  background-color: ${props => props.theme.colors.navy}
`

const miniStylesSelected = css`
  background-color: ${props => props.theme.colors.lightPink};
`

const kindVariants = {
  regular: regularStyles,
  mini: miniStyles
}

const kindVariantsSelected = {
  regular: regularStylesSelected,
  mini: miniStylesSelected
}

const blockStyles = css`
  width: 100%;
  display: block;
`

const Button = styled(BaseButton)`
  ${props => kindVariants[props.kind]}
  ${props => props.block && blockStyles}
  ${props => props.selected && kindVariantsSelected[props.kind]}
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
