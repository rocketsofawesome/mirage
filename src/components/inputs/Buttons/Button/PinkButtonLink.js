import styled, { css } from 'styled-components'

import BaseButton from './Button.base'

const ButtonLink = BaseButton.withComponent('a')
const setMaxWidth = css`max-width: ${props => props.maxWidth}`
const PinkButtonLink = styled(ButtonLink)`
  color: ${props => props.theme.colors.navy};
  border-color: transparent;
  background-color: ${props => props.theme.colors.lightPink};
  line-height: 44px;
  text-decoration: none;
  ${props => props.maxWidth && setMaxWidth}
`
/** @component */
export default PinkButtonLink
