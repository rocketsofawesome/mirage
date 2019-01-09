import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import BaseButton from './Button.base'
import { NavyCheckmark } from 'SRC/core/icons/Checkmark'
import { GraySpinner } from 'SRC/core/icons/Spinner'

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

const colorButton = css`
  ${props => (!props.selected && !props.disabled && !props.loading) && defaultStyle}
  ${props => props.selected && selected}
  ${props => props.disabled && disabledOrLoading}
  ${props => props.loading && disabledOrLoading}
`

const WhiteBorderButton = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0);
  ${props => colorButton}
`

WhiteBorderButton.propTypes = {
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
      white: PropTypes.string
    })
  })
}

WhiteBorderButton.defaultProps = {
  checkmark: NavyCheckmark,
  spinner: GraySpinner
}

/** @component */
export default WhiteBorderButton
export { colorButton, disabledOrLoading, selected }
