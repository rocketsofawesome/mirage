import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const constrained = css`
  max-width: 1440px;
  margin: 0 auto;
`

const notConstrained = css`
  max-width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  ${props => props.theme.media.tablet`
    margin-left: 20px;
    margin-right: 20px;
  `}
`

const padding = css`
  padding: 0 3%;
  ${props => props.theme.media.tablet`
    padding: 0 7%;
  `}
`

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => props.constrained ? constrained : notConstrained}
  ${props => props.padding && padding}
  align-items: ${props => props.align || 'stretch'}
`

FlexRow.propTypes = {
  constrained: PropTypes.bool,
  padding: PropTypes.bool
}

/** @component */
export default FlexRow
