import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme } from 'SRC/core/theme'
import BaseFlexCol from './flexCol.base'

const columnToPercent = (elementWidth, containerWidth) => {
  return `${100 * (elementWidth/containerWidth)}%`
}

const spanner = (props, breakpoint) => {
  if (props[breakpoint].span) {
    return css`
      margin-left: ${props => props[breakpoint].nested
        ? columnToPercent(props[breakpoint].span, props[breakpoint].nested)
        : columnToPercent(props[breakpoint].span, props.columns.desktop)};
    `
  } else {
    return css`
      margin-left: 0;
    `
  }
}

const FlexCol = styled(BaseFlexCol)`
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
      padding-left: ${props.gutter || '0.5rem'};
      padding-right: ${props.gutter || '0.5rem'};
    `
  }
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      max-width: ${props => props.tablet.nested
        ? columnToPercent(props.tablet.width, props.tablet.nested)
        : columnToPercent(props.tablet.width, props.columns.desktop)};
      flex-basis: ${props => props.tablet.nested
        ? columnToPercent(props.tablet.width, props.tablet.nested)
        : columnToPercent(props.tablet.width, props.columns.desktop)};
        ${ props => spanner(props, 'tablet')}
        ${props => props.nested
          ? `
            padding-left: 0;
            padding-right: 0;
          `
          : `
            padding-left: ${props.gutter || '1rem'};
            padding-right: ${props.gutter || '1rem'};
          `
        }
  `}

  ${props => props.theme.breakpointsVerbose.aboveTabletMax`
    max-width: ${props => props.desktop.nested
      ? columnToPercent(props.desktop.width, props.desktop.nested)
      : columnToPercent(props.desktop.width, props.columns.desktop)};
    flex-basis: ${props => props.desktop.nested
      ? columnToPercent(props.desktop.width, props.desktop.nested)
      : columnToPercent(props.desktop.width, props.columns.desktop)};
    ${ props => spanner(props, 'desktop')}
  `}
`

FlexCol.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.func
  ]),
  children: PropTypes.node,
  mobile: PropTypes.shape({
    width: PropTypes.number.isRequired,
    span: PropTypes.number,
    nested: PropTypes.number
  }),
  tablet: PropTypes.shape({
    width: PropTypes.number,
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
  tablet: {
    width: 12
  },
  columns: {
    mobile: theme.grid.columns.mobile,
    desktop: theme.grid.columns.desktop
  }
}

/** @component */
export default FlexCol
