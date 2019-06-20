import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Link } from 'SRC'

const setWidth = ({fields: { width = 'Fit Text'}}) => {
  const WIDTH = {
    'Fit Text': css`
    max-width: 290px;
    width: calc(100% - 20px);
    flex: 0 0 auto;
    margin-bottom: 20px;
    &:hover {
      text-decoration: underline;
    }
    ${props => props.theme.breakpointsVerbose.belowTablet`
      font-size: 1.4rem;
      height: 3.5rem;
    `}
    `,
    'Full Width': css`
      flex: 1 1 100%;
      width: calc(100% - 20px);
      text-decoration: underline;
      text-align: center;
    `
  }
  return WIDTH[width]
}

const ContentfulButton = styled(({
  fields: {
    buttonText,
    route
  },
  sys,
  renderLink,
  ...props
}) => {
  return renderLink({target: route, children: buttonText, ...props})
})`
  box-sizing: border-box;
  padding: 0 20px;
  height: 50px;
  object-fit: contain;
  display: inline-flex;
  color: ${props => props.fields.color ? props.fields.color : props.theme.colors.navy};
  background-color: ${props => props.fields.backgroundColor ? props.fields.backgroundColor : props.theme.colors.yellow};
  font-family: $din-medium-font;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-left: 10px;
  margin-right: 10px;
  ${props => setWidth(props)}

  &:hover {
    color: inherit;
  }
  &:last-of-type {
    ${props => props.theme.breakpointsVerbose.belowTablet`
      margin-bottom: 0;
    `}
  }
`

ContentfulButton.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.shape({
    backgroundColor: PropTypes.string,
    buttonText: PropTypes.string,
    color: PropTypes.string,
    route: PropTypes.string,
    width: PropTypes.string
  }),
  renderLink: PropTypes.func
}

ContentfulButton.defaultProps = {
  renderLink: (inProps) => {
    const { target, children, ...props } = inProps
    return (
      <Link
        href={target}
        underline={false}
        {...props}>
          {children}
        </Link>
      )
  }
}

/** @component */
export default ContentfulButton
