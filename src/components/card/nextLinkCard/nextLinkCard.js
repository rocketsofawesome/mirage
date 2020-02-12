import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// This file is compatible with next/link, whereas card.js is not
// TODO: Move regular links to next/link and remove card.js

const cardHover = css`
  text-decoration: none;
  &:hover {
    cursor: pointer
  }
`
const constrainedWidth = css`max-width: ${props => props.maxWidth};`

const CardLink = styled.a`
  text-decoration: none;
`

const NextLinkCard = styled(({
  children,
  element,
  className,
  ...props
}) => {
  delete props.maxWidth
  delete props.constrained

  // Looks weird because next/link can't pass className to its children
  // We're adding className back here
  const styledChildren = (
    <CardLink>
       {React.Children.map(children, child => {
         return React.cloneElement(child, { className }, child.props.children)
       })}
    </CardLink>
  )

  return React.createElement(element, props, styledChildren)

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
NextLinkCard.propTypes = {
  constrained: PropTypes.bool,
  element: PropTypes.node,
  maxWidth: PropTypes.string
}

NextLinkCard.defaultProps = {
  element: 'a',
  maxWidth: '29.5rem'
}
/** @component */
export default NextLinkCard
