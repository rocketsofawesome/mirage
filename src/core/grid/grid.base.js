import PropTypes from 'prop-types'
import { css } from 'styled-components'

const tabletMargins = css`
  margin: ${props => ` 0 ${props.theme.grid.margins.tablet}`};
`

const tabletGrid = css`
  grid-template-columns:
    repeat(${props => props.theme.grid.columns.tablet}, 1fr);
  ${props => props.margins && tabletMargins}
`

const desktopMargins = css`
  margin: ${props => ` 0 ${props.theme.grid.margins.desktop}`};
`

const desktopGrid = css`
  grid-template-columns:
    repeat(${props => props.theme.grid.columns.desktop}, 1fr);
  max-width: ${props => props.maxWidth};
  ${props => props.margin && desktopMargins}
`

const debug = css`
  > * {
    border: 1px dashed #666;
  }
`

const mobileMargins = css`
  margin: ${props => ` 0 ${props.theme.grid.margins.mobile}`};
`

const grid = css`
  grid-gap: ${props => props.theme.grid.gutter};
  display: grid;
  grid-auto-flow: row;
  grid-template-columns:
    repeat(${props => props.theme.grid.columns.mobile}, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: ${props => props.theme.grid.gutter};
  ${props => props.margin && mobileMargins}
  ${props => props.theme.media.tablet`${tabletGrid}`}
  ${props => props.theme.media.laptop`${desktopGrid}`}
  ${props => props.debug && debug}
`

grid.propTypes = {
  debug: PropTypes.bool,
  margins: PropTypes.bool,
  theme: PropTypes.shape({
    media: PropTypes.shape({
      tablet: PropTypes.func,
      desktop: PropTypes.func
    }),
    grid: PropTypes.shape({
      columns: PropTypes.shape({
        mobile: PropTypes.number,
        tablet: PropTypes.number,
        desktop: PropTypes.number
      }),
      gutter: PropTypes.string,
      margins: PropTypes.shape({
        mobile: PropTypes.number,
        tablet: PropTypes.number,
        desktop: PropTypes.number
      })
    })
  }),
}


/** @component */
export default grid
export { debug, desktopGrid, desktopMargins, mobileMargins, tabletGrid, tabletMargins }

grid.defaultProps = {
  margin: true,
  maxWidth: '114rem'
}
