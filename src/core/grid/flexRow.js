import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import BaseFlexRow from './flexRow.base'

const constrained = css`
  max-width: 1440px;
  margin: 0 auto;
`

const notConstrained = css`
  max-width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  ${props => props.theme.breakpointsVerbose.abovePhoneMax`
    margin-left: 20px;
    margin-right: 20px;
  `}
`

const padding = css`
  padding: 0;
  ${props => props.theme.breakpointsVerbose.abovePhoneMax`
    padding: 0 7%;
  `}
`

const FlexRow = styled(BaseFlexRow)`
  box-sizing: border-box;
  flex-basis: 100%;
  display: flex;
  justify-content: ${props => props.align};
  flex-wrap: ${props => props.mobile.wrap};
  column-gap: ${props => props.mobile.columnGap};
  ${props => props.constrained ? constrained : notConstrained};
  ${props => props.padding && padding};
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    flex-wrap: ${props => props.tablet.wrap}
    column-gap: ${props => props.tablet.columnGap}
  `}
  ${props => props.theme.breakpointsVerbose.aboveTabletMax`
    flex-wrap: ${props => props.desktop.wrap}
    column-gap: ${props => props.desktop.columnGap}
  `}
`

FlexRow.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  constrained: PropTypes.bool,
  padding: PropTypes.bool,
  align: PropTypes.string,
  mobile: PropTypes.shape({
    columnGap: PropTypes.string,
    wrap: PropTypes.string
  }),
  tablet: PropTypes.shape({
    columnGap: PropTypes.string,
    wrap: PropTypes.string
  }),
  desktop: PropTypes.shape({
    columnGap: PropTypes.string,
    wrap: PropTypes.string
  })
}

FlexRow.defaultProps = {
  element: 'div',
  align: 'flex-start',
  mobile: {
    wrap: 'wrap'
  },
  desktop: {
    wrap: 'wrap'
  },
  tablet: {
    wrap: 'wrap'
  }
}
/** @component */
export default FlexRow
