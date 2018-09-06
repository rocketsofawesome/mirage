import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import BaseButton from './Button.base'
import Checkmark from '../icons/Checkmark'
import Spinner from '../icons/Spinner'

const colorButton = (props) => {
  const defaultStyle = css`
    color: ${props => props.theme.colors.rocketBlue};
    border-color: ${props => props.theme.colors.rocketBlue};
    &:hover {
      color: ${props => props.theme.colors.rocketBlueHover};
      border-color: ${props => props.theme.colors.rocketBlueHover};
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

const BlueBorderButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0);
  ${props => colorButton(props)}
  ${Spinner} > * {
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
