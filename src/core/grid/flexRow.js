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
  flex-wrap: wrap;
  justify-content: ${props => props.align};
  ${props => props.constrained ? constrained : notConstrained}
  ${props => props.padding && padding}
`

FlexRow.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  constrained: PropTypes.bool,
  padding: PropTypes.bool,
  align: PropTypes.string
}

FlexRow.defaultProps = {
  element: 'div',
  align: 'flex-start'
}
/** @component */
export default FlexRow
