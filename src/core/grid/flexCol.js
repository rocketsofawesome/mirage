import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import { theme } from 'SRC/core/theme'

const columnToPercent = (elementWidth, containerWidth) => {
  return `${100 * (elementWidth/containerWidth)}%`
}

const spanner = (props, breakpoint) => {
  if (props[breakpoint].span) {
    return css`
      margin-left: ${props => props.desktop.nested
        ? columnToPercent(props.desktop.span, props.desktop.nested)
        : columnToPercent(props.desktop.span, props.columns.desktop)};
    `
  } else {
    return null
  }
}

const FlexCol = styled(({ element, children, ...props}) => {
  return React.createElement(element, props, children)
})`
  box-sizing: border-box;
  max-width: ${props => props.mobile.nested
    ? columnToPercent(props.mobile.width, props.mobile.nested)
    : columnToPercent(props.mobile.width, props.columns.mobile)};
  flex-basis: ${props => props.mobile.nested
    ? columnToPercent(props.mobile.width, props.mobile.nested)
    : columnToPercent(props.mobile.width, props.columns.mobile)};
  ${props => spanner(props, 'mobile')}
  ${props => props.nested
    ? `
      padding-left: 0;
      padding-right: 0;
    `
    : `
      padding-left: ${props.gutter || '5px'};
      padding-right: ${props.gutter || '5px'};
    `
  }

  ${props => props.theme.breakpointsVerbose.aboveLaptop`
    max-width: ${props => props.desktop.nested
      ? columnToPercent(props.desktop.width, props.desktop.nested)
      : columnToPercent(props.desktop.width, props.columns.desktop)};
    flex-basis: ${props => props.desktop.nested
      ? columnToPercent(props.desktop.width, props.desktop.nested)
      : columnToPercent(props.desktop.width, props.columns.desktop)};
    ${ props => spanner(props, 'desktop')}
  `
}
`

FlexCol.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  children: PropTypes.node.isRequired,
  mobile: PropTypes.shape({
    width: PropTypes.number.isRequired,
    span: PropTypes.number,
    nested: PropTypes.number
  }),
  desktop: PropTypes.shape({
    width: PropTypes.number.isRequired,
    span: PropTypes.number,
    nested: PropTypes.number
  }),
}

FlexCol.defaultProps = {
  element: 'div',
  mobile: {
    width: 4
  },
  desktop: {
    width: 12
  },
  columns: {
    mobile: theme.grid.columns.mobile,
    desktop: theme.grid.columns.desktop
  }
}

/** @component */
export default FlexCol
