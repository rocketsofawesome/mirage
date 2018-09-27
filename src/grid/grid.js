import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const TabletGrid = css`
  grid-template-columns:
    repeat(${props => props.theme.grid.columns.tablet}, 1fr);
  margin: 0 ${props => props.theme.grid.margins.tablet};
`

const DesktopGrid = css`
  grid-template-columns:
    repeat(${props => props.theme.grid.columns.desktop}, 1fr);
  max-width: 144rem;
  margin: 0 ${props => props.theme.grid.margins.desktop};
`

const Grid = styled.div`
  grid-gap: ${props => props.theme.grid.gutter};
  display: grid;
  grid-auto-flow: row;
  grid-template-columns:
    repeat(${props => props.theme.grid.columns.mobile}, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: ${props => props.theme.grid.gutter};
  margin: 0 ${props => props.theme.grid.margins.mobile};
  ${props => props.theme.media.tablet`${TabletGrid}`}
  ${props => props.theme.media.desktop`${DesktopGrid}`}
  ${props => props.debug &&
    `> * {
      border: 1px dashed #666;
    }`
  }
`

Grid.propTypes = {
  debug: PropTypes.bool,
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
export default Grid
