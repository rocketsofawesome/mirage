import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import media from '../theme/breakpoints'

const tabletGrid = css`
  grid-template-columns: repeat(${props => props.tabletCols}, 1fr);
`

const desktopGrid = css`
  grid-template-columns: repeat(${props => props.desktopCols}, 1fr);
  max-width: 1440px;
  margin: 0 auto;
`

const Row = styled.div`
  grid-gap: 10px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(${props => props.mobileCols}, 1fr);
  grid-column-gap: 10px;
  margin: 0 7%;
  ${media.tablet`${tabletGrid}`}
  ${media.desktop`${desktopGrid}`}
`

Row.propTypes = {
  /** Number of columns in a row for the desktop breakpoint */
  desktopCols: PropTypes.number.isRequired,
  /** Number of columns in a row for the mobile breakpoint */
  mobileCols: PropTypes.number.isRequired,
  /** Number of columns in a row for the mobile breakpoint */
  tabletCols: PropTypes.number.isRequired
}

Row.defaultProps = {
  desktopCols: 12,
  mobileCols: 4,
  tabletCols: 12
}

/** @component */
export default Row
