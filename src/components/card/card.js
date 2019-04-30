import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { InlineImage } from 'SRC'

const cardHover = css`&:hover { cursor: pointer }`
const constrainedWidth = css`max-width: ${props => props.maxWidth};`

const Card = styled(({
  children,
  element,
  ...props
}) => {
  return React.createElement(element, props, children)

})`
  ${props => props.element === 'a' ? cardHover : '' }
  ${props => props.constrained ? constrainedWidth : ''}
  display: flex;
  flex-direction: column;
  padding-bottom: 0.3rem;
  display: flex;
  flex-direction: column;
  img {
    height: auto;
    width: 100%;
  }
  > * {
    &:first-child{
      padding-bottom: 0.3rem;
    }
    &:not(:first-child) {
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
    }
  }
`
Card.propTypes = {
  constrained: PropTypes.bool,
  element: PropTypes.node,
  maxWidth: PropTypes.string
}

Card.defaultProps = {
  constrained: true,
  element: 'a',
  maxWidth: '29.5rem'
}
/** @component */
export default Card