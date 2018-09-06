import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import BaseButton from './Button.base'
import Checkmark from '../icons/checkmark'
import Spinner from '../icons/spinner'

const colorButton = (props) => {
  const defaultStyle = css`
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.white};
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
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

const WhiteBorderButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0);
  ${props => colorButton(props)}
  ${Spinner} > * {
    fill: ${props => props.theme.colors.loading};
  }

  ${Checkmark} > * {
    stroke: ${props => props.theme.colors.navy};
  }
`

WhiteBorderButton.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default WhiteBorderButton
