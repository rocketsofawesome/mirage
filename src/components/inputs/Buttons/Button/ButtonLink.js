import React from 'react'
import styled, { css } from 'styled-components'

import BaseButton from './Button.base'

const textColor = (props) => {
  switch(props.kind) {
    case 'pink':
      return props.theme.colors.navy
    case 'blue':
      return props.theme.colors.white
    case 'blue_border':
      return props.theme.colors.rocketBlue
    default:
      return props.theme.colors.white
  }
}

const bgColor = (props) => {
  switch(props.kind) {
    case 'pink':
      return props.theme.colors.lightPink
    case 'blue':
      return props.theme.colors.rocketBlue
    case 'blue_border':
      return props.theme.colors.white
    default:
      return props.theme.colors.rocketBlue
  }
}

const borderColor = (props) => {
  switch(props.kind) {
    case 'blue_border':
      return props.theme.colors.rocketBlue
    default:
      return 'transparent'
  }
}

const Link = ({ renderLink, children, ...props }) => {
  if (renderLink) {
    return renderLink({...props, children: children})
  }
  return <a {...props}>{children}</a>
}

const BaseButtonLink = BaseButton.withComponent(Link)
const setMaxWidth = css`max-width: ${props => props.maxWidth};`
const ButtonLink = styled(BaseButtonLink)`
  color: ${textColor};
  border-color: ${borderColor};
  background-color: ${bgColor};
  border-width: 1px;
  line-height: 44px;
  text-decoration: none;
  ${props => props.maxWidth && setMaxWidth}
`
/** @component */
export default ButtonLink
