import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Spinner from '../icons/spinner'
import Checkmark from '../icons/checkmark'
import BaseButton from './Button.base'

const backgroundColor = (props) => {
  const defaultStyle = css`
    background-color: ${props.theme.colors.rocketBlue};
    &:hover {
      background-color: ${props.theme.colors.rocketBlueHover};
    }
  `
  const disabledOrLoading = css`
    background-color: ${props.theme.colors.loading};
  `
  const selected = css`
    background-color: ${props.theme.colors.navy}
  `
  if (props.selected) {
    return selected
  } else if (props.disabled || props.loading) {
    return disabledOrLoading
  }
  return defaultStyle
}

const Button = styled(BaseButton)`
  color: ${props => props.theme.colors.white};
  border-color: transparent;

  ${Spinner} > * {
    fill: ${props => props.theme.colors.white};
  }

  ${Checkmark} > * {
    stroke: ${props => props.theme.colors.white};
  }

  ${props => backgroundColor(props)}

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
